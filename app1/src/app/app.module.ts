import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormComponentComponent } from './form-component/form-component.component';
import { ClarityModule } from "@clr/angular";

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/app1/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
