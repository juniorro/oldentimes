import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public history: [];
  public events: [];
  public deaths:[];
  public births:[]
  public showEvents: boolean;
  public showDeaths: boolean;
  public showBirths: boolean;

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.showEvents = true;
    this.todayInHistory();
  }

  public todayInHistory(): void {
    this.historyService.getTodayHistory().subscribe(
      (response: any)=>{
        console.log(response);
        this.history = response;
        this.events = response.data.Events;
        this.births = response.data.Births;
        this.deaths = response.data.Deaths;
        console.log(this.history)
      },
      (error: any)=>{
        console.log(error);
      },
    );
  }

  public displayEvents(): void {
    this.showEvents = true;
    this.showBirths = false;
    this.showDeaths = false;
  }

  public displayBirths(): void {
    this.showBirths = true;
    this.showDeaths = false;
    this.showEvents = false;
    //this.sendEmail();
  }

  public displayDeaths(): void {
    this.showDeaths = true;
    this.showEvents = false;
    this.showBirths = false;
  }

  public sendEmail(): void {
    let data = {
      'key': 'cbfed1519feb69cfd84fc2da8214e1e6-us20',
      'message': {
        'from_email': 'juniorro98@outlook.com',
        'to': [
            {
              'email': 'juniorro98@outlook.com',
              'name': 'Roland Junior Toussaint',
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': 'YOUR SUBJECT HERE!',
        'html': 'This is a test bitch'
      }
    }
    this.historyService.sendEmail(data).subscribe(
      (response: any)=>{
        console.log(response);
      },
      (error: any)=>{
        console.log(error);
      }
    );
  }
}
