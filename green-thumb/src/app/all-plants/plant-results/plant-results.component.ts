import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { PlantServiceService } from '../plant-service.service';

@Component({
  selector: 'app-plant-results',
  templateUrl: './plant-results.component.html',
  styleUrls: ['./plant-results.component.css'],
})
export class PlantResultsComponent implements OnInit {
  allPlants: Plant[] = [];

  constructor() {}

  ngOnInit(): void {}
}
