import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdToolbarModule, MdIconModule, MdButtonModule, MdCheckboxModule, MdSidenavModule, MaterialModule, MdNativeDateModule, MdMenuModule, MdCardModule } from '@angular/material';



import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdSidenavModule,BrowserModule,
    MdNativeDateModule,
    MdMenuModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    MdIconModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
