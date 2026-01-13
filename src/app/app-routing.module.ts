import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from "./layout/layout/layout.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LeadsComponent} from "./pages/leads/leads.component";
import {CustomersComponent} from "./pages/customers/customers.component";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {LoginComponent} from "./pages/login/login.component";


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {
    path:'',component:LayoutComponent, children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'lead',component:LeadsComponent},
      {path:'customer',component:CustomersComponent},
      {path:'', redirectTo : 'dashboard', pathMatch:"full"}
    ]
  },
  {path:'**', redirectTo :'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
