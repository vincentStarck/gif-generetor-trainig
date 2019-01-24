import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    UserComponent,

  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
