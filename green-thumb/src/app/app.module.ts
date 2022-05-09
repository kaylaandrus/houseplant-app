import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPlantsComponent } from './my-plants/my-plants.component';
import { AllPlantsComponent } from './all-plants/all-plants.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PlantResultsComponent } from './all-plants/plant-results/plant-results.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPlantsComponent,
    AllPlantsComponent,
    NavbarComponent,
    PlantDetailsComponent,
    ScheduleComponent,
    EditPlantComponent,
    SearchbarComponent,
    PlantResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
