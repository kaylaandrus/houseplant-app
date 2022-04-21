import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Plant } from './plant.model';

@Injectable({
  providedIn: 'root',
})
export class PlantServiceService {
  myPlantsChanged = new Subject<[]>();
  slice() {
    throw new Error('Method not implemented.');
  }
  private availablePlants: Plant[] = [
    new Plant(
      'Swiss Cheese Plant',
      'Monstera Deliciosa',
      'https://p0.piqsels.com/preview/880/12/1014/copy-space-background-green-leaf.jpg'
    ),
    new Plant(
      "Devil's Ivy",
      'Epipremnum Aureum',
      'https://i.etsystatic.com/14339179/r/il/e626c6/2322638407/il_794xN.2322638407_4fsx.jpg'
    ),
    new Plant(
      'ZZ Plant',
      'Zamioculcas',
      'https://www.thespruce.com/thmb/ps12JCvC8KyGmeQPIa9YWUCPo0M=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/zz-zanzibar-gem-plant-profile-4796783-02-e80e5506091f4dcfb226c5a21718deb6.jpg'
    ),
  ];

  addPlantToMyPlants(plant: Plant) {
    this.availablePlants.push(plant);
    this.myPlantsChanged.next;
  }
}
