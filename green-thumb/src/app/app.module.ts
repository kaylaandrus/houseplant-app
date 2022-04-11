import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPlantsComponent } from './my-plants/my-plants.component';
import { AllPlantsComponent } from './all-plants/all-plants.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPlantsComponent,
    AllPlantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
