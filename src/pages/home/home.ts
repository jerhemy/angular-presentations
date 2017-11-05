import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TimelineEvent} from "../../app/timeline/timeline-event";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: TimelineEvent[] = [
    {
      title: 'Test1',
      date: '11/15/2017',
      beforeText: 'Text Before Text',
      list: ['One', 'Two', 'Three'],
      afterText: 'Test After Text'
    },
    {
      title: 'Test2',
      date: '11/15/2017',
      beforeText: 'Text Before Text',
      list: ['One', 'Two', 'Three'],
      afterText: 'Test After Text'
    },
    {
      title: 'Test3',
      date: '11/15/2017',
      beforeText: 'Text Before Text',
      list: ['One', 'Two', 'Three'],
      afterText: 'Test After Text'
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
