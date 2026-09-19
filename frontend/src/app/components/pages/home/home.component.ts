import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService} from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
foods:Food[]=[];
constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
  let foodsObservalbe:Observable<Food[]>;
  activatedRoute.params.subscribe((params) => {
  if(params.searchTerm)
   // this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
  foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);

  else if(params.tag)
 //   this.foods=this.foodService.getAllFoodsByTag(params.tag);
  foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);

  else
 //   this.foods=foodService.getAll();
    foodsObservalbe = this.foodService.getAll();

    foodsObservalbe.subscribe((serverFoods)=>{this.foods=serverFoods;

    })

})
}}