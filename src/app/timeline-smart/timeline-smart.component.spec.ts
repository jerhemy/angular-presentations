import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSmartComponent } from './timeline-smart.component';

describe('TimelineSmartComponent', () => {
  let component: TimelineSmartComponent;
  let fixture: ComponentFixture<TimelineSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
