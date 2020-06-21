import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalendarService } from '../home/calendar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss']
})
export class GuardComponent implements OnInit {
  guardFormGroup: FormGroup;
  badPassword: boolean = false;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private calendarService: CalendarService
  ) { }

  ngOnInit() {
    this.guardFormGroup = this.fb.group({
      pw: ''
    });
  }

  submit(): void {
    const form = this.guardFormGroup.value;
    const pw = form.pw;
    if (pw && pw === 'rcfadmin2020') {
      this.calendarService.isAdminLoggedin = true;
      this.router.navigate(['admin']);
    } else {
      this.badPassword = true;
    }
  }

}
