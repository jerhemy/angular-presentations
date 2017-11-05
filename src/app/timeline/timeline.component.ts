import {Component, Input, OnInit} from '@angular/core';
import {TimelineEvent} from "./timeline-event";

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  // styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() timeline: TimelineEvent[];

  title: string = "Presentation Component";

  constructor() { }

  ngOnInit() {
  }

}
