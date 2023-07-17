import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OrderComponent} from "./order/order.component";
import {StudentsComponent} from "./students/students.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {NewComponent} from "./order/inner-iteams/new/new.component";
import {GetComponent} from "./order/inner-iteams/get/get.component";
import {DeleteComponent} from "./order/inner-iteams/delete/delete.component";

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'student/:data',component:StudentsComponent},
  {path:'order',component:OrderComponent , children:[
      {path:'',redirectTo:'/order/new',pathMatch:"full"},
      {path:'new',component:NewComponent},
      {path:'get',component:GetComponent},
      {path:'delete',component:DeleteComponent}
    ]},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
