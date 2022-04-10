import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPlantsComponent } from './my-plants/my-plants.component';
import { PlantDetailsComponent } from './my-plants/plant-details/plant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPlantsComponent,
    PlantDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
