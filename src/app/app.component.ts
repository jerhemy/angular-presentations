import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import {TimelineEvent} from "./timeline/timeline-event";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  // data: TimelineEvent[] = [
  //   {
  //     title: 'Test1',
  //     date: new Date().toLocaleDateString().toString(),
  //     beforeText: 'Text Before Text',
  //     list: ['One', 'Two', 'Three'],
  //     afterText: 'Test After Text'
  //   },
  //   {
  //     title: 'Test2',
  //     date: new Date().toLocaleDateString().toString(),
  //     beforeText: 'Text Before Text',
  //     list: ['One', 'Two', 'Three'],
  //     afterText: 'Test After Text'
  //   },
  //   {
  //     title: 'Test3',
  //     date: new Date().toLocaleDateString().toString(),
  //     beforeText: 'Text Before Text',
  //     list: ['One', 'Two', 'Three'],
  //     afterText: 'Test After Text'
  //   }
  // ];

  timeline: TimelineEvent[];

  constructor(private http: Http) {}

  ngOnInit() {
    this.getTimelineData().subscribe(result => this.timeline = result);
  }

  getTimelineData(): Observable<TimelineEvent[]> {
    return this.http.get('/timeline')
      .map((res: Response) => res.json() as TimelineEvent[]);
  }
}
