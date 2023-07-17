import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { OrderComponent } from './order/order.component';
import {AppRoutingModule} from "./app-routing.module";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {FormsModule} from "@angular/forms";
import { NewComponent } from './order/inner-iteams/new/new.component';
import { DeleteComponent } from './order/inner-iteams/delete/delete.component';
import { GetComponent } from './order/inner-iteams/get/get.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    OrderComponent,
    NotFoundPageComponent,
    NewComponent,
    DeleteComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
