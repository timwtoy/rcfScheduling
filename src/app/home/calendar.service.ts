import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TimeOfDay } from './day.model';
import { devURL, getDaysPath, newSlot } from '../constants/api.constants';

@Injectable({
    providedIn: 'root',
})
export class CalendarService {
    constructor(
        private http: HttpClient
    ) {}

    async getCalendar(day: string): Promise<TimeOfDay[]> {
        let res: TimeOfDay[] = []
        try {
            const results: any = await this.http.get(`${devURL}${getDaysPath}/${day}`).toPromise();
            console.log(results);
            res = results.data;
        } catch (error) {
            console.log('oopsie woopsie uwuu');
            return [];
        }
        return res;
    }

    async newPosting(newSlotToAdd: TimeOfDay): Promise<TimeOfDay> {
        const results: any = await this.http.post(`https://x2pkfux381.execute-api.us-east-1.amazonaws.com/dev/calendar/newSlot`, JSON.stringify(newSlotToAdd)).toPromise();
        return results;
    }
}