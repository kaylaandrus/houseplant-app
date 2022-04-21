import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlantsComponent } from './all-plants/all-plants.component';
import { EditPlantComponent } from './edit-plant/edit-plant.component';
import { MyPlantsComponent } from './my-plants/my-plants.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-plants', pathMatch: 'full' },
  { path: 'all-plants', component: AllPlantsComponent },
  { path: 'my-plants', component: MyPlantsComponent },
  { path: 'edit-plant', component: EditPlantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
