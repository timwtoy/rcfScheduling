import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CalendarService } from '../home/calendar.service';
import { formatDate } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { TimeOfDay, TimeLengthOption } from '../home/day.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('750ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('750ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class AdminComponent implements OnInit {
  selectedDate: string = '';
  displayedColumns = ['name', 'email', 'formattedDisplay'];
  slots: TimeOfDay[] = [];
  dataSource: MatTableDataSource<TimeOfDay> = new MatTableDataSource<TimeOfDay>();
  selectedTime: number;

  constructor(
    private service: CalendarService,
    private changeDetectorRefs: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  async addEvent(type: string, event: MatDatepickerInputEvent<Date>): Promise<void> {
    this.selectedDate = this.reformatDate(event.value);
    await this.refreshTableData();
  }

  reformatDate(dateChosen: Date): string {
    return formatDate(dateChosen, 'MM-dd-yyyy', 'en-us');
  }

  highlightSelectedRow(row: TimeOfDay): boolean {
    return row.beginningTime === this.selectedTime;
  }

  timeSlotSelected(row: TimeOfDay) {
    this.selectedTime = row.beginningTime;
  }

  async refreshTableData(): Promise<void> {
    const res: TimeOfDay[] = await this.service.getCalendar(this.selectedDate);
    this.slots = res;
    if (res && res.length > 0) {
      this.updateSlots();
    }
  }

  updateSlots(): void {
    this.slots = this.slots.map(slot => {
      let endTime: number = slot.lengthOfTime === TimeLengthOption.NINETY ? slot.beginningTime + 1.5 : slot.beginningTime + 1;
      slot.formattedDisplay = `${this.findTime(slot.beginningTime)} - ${this.findTime(endTime)}`;
      return slot;
    });
    this.dataSource.data = this.slots;
    this.changeDetectorRefs.detectChanges();
  }

  findTime(numericFormat: number): string {
    let meridiem = 'am';
    let numberToBeFormatted = numericFormat;
    let minutes = ':00';
    if (numberToBeFormatted > 12.5) {
      meridiem = 'pm';
      numberToBeFormatted -= 12;
    } else if (numberToBeFormatted === 12 || numberToBeFormatted === 12.5) {
      meridiem = 'pm';
    }
    let decimal = numberToBeFormatted % 1;
    if (decimal) {
      minutes = ':30';
      numberToBeFormatted -= .5;
    }
    return `${numberToBeFormatted}${minutes} ${meridiem}`;
  }

}
