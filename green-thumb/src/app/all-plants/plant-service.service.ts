import { Injectable } from '@angular/core';
import { Plant } from './plant.model';

@Injectable({
  providedIn: 'root',
})
export class PlantServiceService {
  private availablePlants: Plant[] = [
    new Plant(
      'Swiss Cheese Plant',
      'Monstera Deliciosa',
      'https://p0.piqsels.com/preview/880/12/1014/copy-space-background-green-leaf.jpg'
    ),
  ];

  constructor() {}
}
