import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from './home/calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar-schedules';
  constructor(
    public router: Router,
    private calendarService: CalendarService
  ) {}
  
  async adminNav(): Promise<void> {
    if (this.calendarService.isAdminLoggedin) {
      await this.router.navigate(['admin']);
    } else {
      await this.router.navigate(['guard']);
    }
  }

  async homeNav(): Promise<void> {
    await this.router.navigate(['home']);
  }
}
