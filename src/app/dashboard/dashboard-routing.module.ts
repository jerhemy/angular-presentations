import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardViewComponent} from './dashboard-view/dashboard-view.component';
import {DashboardDemoComponent} from "./dashboard-demo/dashboard-demo.component";
import {DashboardDemo2Component} from "./dashboard-demo2/dashboard-demo2.component";

const routes: Routes = [
  { path: '', component: DashboardViewComponent,
    children: [
      { path: '', redirectTo: 'demo1', pathMatch: 'full' },
      { path: 'demo1', component: DashboardDemoComponent },
      { path: 'demo2', component: DashboardDemo2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
