import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AppRoutingModule } from './app-routing.module';
import { ClarityModule, ClrVerticalNavIcon, ClrVerticalNavModule } from "@clr/angular";

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,
    ClrVerticalNavModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }
}
