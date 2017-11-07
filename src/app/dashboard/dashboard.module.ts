import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DashboardDemoComponent } from './dashboard-demo/dashboard-demo.component';
import { DashboardDemo2Component } from './dashboard-demo2/dashboard-demo2.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardViewComponent, DashboardDemoComponent, DashboardDemo2Component]
})
export class DashboardModule { }
