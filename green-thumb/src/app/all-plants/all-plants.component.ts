import { Component, OnInit } from '@angular/core';
import { Plant } from './plant.model';
import { PlantServiceService } from './plant-service.service';

@Component({
  selector: 'app-all-plants',
  templateUrl: './all-plants.component.html',
  styleUrls: ['./all-plants.component.css'],
})
export class AllPlantsComponent implements OnInit {
  plant = Plant;
  myPlants: Plant[] = [];
  constructor(private plantService: PlantServiceService) {}

  ngOnInit(): void {}
}
