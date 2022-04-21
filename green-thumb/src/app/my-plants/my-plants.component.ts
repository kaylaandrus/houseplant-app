import { Component, OnInit } from '@angular/core';
import { Plant } from '../all-plants/plant.model';
import { PlantServiceService } from '../all-plants/plant-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-my-plants',
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.css'],
})
export class MyPlantsComponent implements OnInit {
  plant = Plant;

  constructor(
    private plantService: PlantServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editPlant() {
    this.router.navigate(['../edit-plant'], { relativeTo: this.route });
  }
  ngOnInit(): void {}
}
