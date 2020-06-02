import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersHomeComponent} from "./customers-home/customers-home.component";
import {CustomersDetailComponent} from "./customers-detail/customers-detail.component";

const routes: Routes = [{
  path : '',
  component : CustomersHomeComponent
},
{
  path: ":CUSTOMERID",
  component: CustomersDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
