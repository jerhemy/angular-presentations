import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDemo2Component } from './dashboard-demo2.component';

describe('DashboardDemo2Component', () => {
  let component: DashboardDemo2Component;
  let fixture: ComponentFixture<DashboardDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
