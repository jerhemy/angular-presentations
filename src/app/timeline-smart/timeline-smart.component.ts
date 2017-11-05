import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {TimelineEvent} from "../timeline/timeline-event";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'timeline-smart',
  templateUrl: '../timeline/timeline.component.html',
  styleUrls: ['../timeline/timeline.component.scss']
})
export class TimelineSmartComponent implements OnInit {

  title: string = "Smart Component";

  timeline: TimelineEvent[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.getTimelineData().subscribe(result => this.timeline = result);
  }

  getTimelineData(): Observable<TimelineEvent[]> {
    return this.http.get('/timeline')
      .map((res: Response) => res.json() as TimelineEvent[]);
  }
}
