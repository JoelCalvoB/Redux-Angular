import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routes';

   const rutas: Routes =[{
      path:'',
      component: DashboardComponent,
      children: dashboardRoutes
   }]

@NgModule({
  declarations: [],
  imports: [
  ]
})
export class DashboardRoutesModule { }
