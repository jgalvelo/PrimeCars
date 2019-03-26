import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { CarService } from "./car.service";
import {DropdownModule} from 'primeng/dropdown';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {ButtonModule} from 'primeng/button';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    TableModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
