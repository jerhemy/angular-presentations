import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';
import {TimelineEvent} from "./timeline-event";
import {By} from "@angular/platform-browser";

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;
  let el;
  let data: TimelineEvent[] = [
    {
      title: 'Test1',
      date: new Date().toLocaleDateString().toString(),
      beforeText: 'Text Before Text',
      list: ['One', 'Two', 'Three'],
      afterText: 'Test After Text'
    },
    {
      title: 'Test2',
      date: new Date().toLocaleDateString().toString(),
      beforeText: 'Text Before Text',
      list: ['One', 'Two', 'Three'],
      afterText: 'Test After Text'
    },
    {
      title: 'Test3',
      date: new Date().toLocaleDateString().toString(),
      beforeText: 'Text Before Text',
      list: ['One', 'Two', 'Three'],
      afterText: 'Test After Text'
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    component.timeline = data;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first h2 should display correct data', () => {
    let de = fixture.debugElement.query(By.css('h2:first-child'));
    let el = de.nativeElement;
    const content = el.textContent;
  });

  it('header element should display correct title', () => {
    let de = fixture.debugElement.query(By.css('h1.center'));
    let el = de.nativeElement;
    const content = el.textContent;
    expect(content).toContain('Presentation Component');
  });
});
