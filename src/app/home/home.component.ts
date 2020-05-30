import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {TimeOfDay, timeSlots, TimeLengthOption} from './day.model';
import { MatTableDataSource } from '@angular/material/table';
import { CalendarService } from './calendar.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  dataSource: MatTableDataSource<TimeOfDay> = new MatTableDataSource<TimeOfDay>();
  displayedColumns = ['formattedDisplay', 'slotsOpen'];
  expandedElement: PeriodicElement | null;
  timeOptions = [
    {id: 0, label: '60 Minutes'},
    {id: 1, label: '90 Minutes'}
  ];
  // The slots currently taken by already signed up users
  takenTimeSlots: TimeOfDay[] = [];
  availableSlots: TimeOfDay[] = [];
  selectedTimeOption: TimeLengthOption = TimeLengthOption.SIXTY;
  newSlotFormGroup: FormGroup;

  constructor(
    private changeDetectorRefs: ChangeDetectorRef,
    private calendarService: CalendarService,
    private fb: FormBuilder
  ) { }

  async ngOnInit() {
    this.newSlotFormGroup = this.fb.group({
      name: [''],
      email: [''],
    });
    this.initializeTable();
    const res: TimeOfDay[] = await this.calendarService.getCalendar('05-20-2020');
    if (res && res.length > 0) {
      this.takenTimeSlots = res;
      this.updateTimeSlots();
    }
  }

  // Renders the table data based on the time length option chosen by user
  initializeTable(): void {
    //Format time
    let endTimeOption = 1;
    if (this.selectedTimeOption === TimeLengthOption.NINETY) {
      endTimeOption = 1.5;
    }
    this.availableSlots = timeSlots.map(slot => {
      slot.formattedDisplay = `${this.findTime(slot.beginningTime)} - ${this.findTime(slot.beginningTime + endTimeOption)}`;
      return slot;
    });
    this.dataSource.data = this.availableSlots;
    this.changeDetectorRefs.detectChanges();
  }

  submitSlot(): void {
    const newSlot: TimeOfDay = {
      id: uuidv4(),
      currentDay: '05-20-2020',
      beginningTime: 8,
      lengthOfTime: 0
    };
    this.calendarService.newPosting(newSlot);
  }

  remapTableData(): void {
    //Format time
    this.dataSource.data = this.availableSlots;
    this.changeDetectorRefs.detectChanges();
  }

  newSelection(event: any): void {
    if (event.value === 1) {
      this.selectedTimeOption = TimeLengthOption.NINETY;
    } else {
      this.selectedTimeOption = TimeLengthOption.SIXTY;
    }
    this.initializeTable();
  }

  testClick(event: any): void {
    console.log(`Row clicked! ${event}`);
    const day = new Date();
    console.log(`Testing output: ${day.getDate()} date and day: ${day.getDay()}`)
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
  }

  updateTimeSlots(): void {
    this.takenTimeSlots.forEach( takenSlot => {
      let endTime = takenSlot.lengthOfTime === TimeLengthOption.SIXTY ? takenSlot.beginningTime + 1 : takenSlot.beginningTime + 1.5;
      this.availableSlots = this.availableSlots.map( availableSlot => {
        let availableSlotEndTime = this.selectedTimeOption === TimeLengthOption.SIXTY ? availableSlot.beginningTime + 1 : availableSlot.beginningTime + 1.5;
        if (availableSlot.slotsOpen && (availableSlot.beginningTime >= takenSlot.beginningTime && availableSlot.beginningTime < endTime) || (availableSlotEndTime > takenSlot.beginningTime && availableSlotEndTime <= endTime)) {
          availableSlot.slotsOpen--;
        }
        return availableSlot;
      });
    });
    this.remapTableData();
  }

  findTime(numericFormat: number): string {
    let meridiem = 'am';
    let numberToBeFormatted = numericFormat;
    let minutes = ':00';
    if (numberToBeFormatted > 12) {
      meridiem = 'pm';
      numberToBeFormatted -= 12;
    }
    let decimal = numberToBeFormatted % 1;
    console.log(`${decimal}: decimal`);
    if (decimal) {
      minutes = ':30';
      numberToBeFormatted -= .5;
    }
    return `${numberToBeFormatted}${minutes} ${meridiem}`;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];