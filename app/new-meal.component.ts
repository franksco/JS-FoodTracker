import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h3>Create Meal:</h3>
      <div class="col-md-4">
        <input placeholder="Name" class="input-lg" #newMealName>
      </div>
      <div class="col-md-4">
        <input placeholder="Details" class="input-lg" #newMealDetails>
      </div>
      <div class="col-md-4">
        <input placeholder="Calories" class="input-lg" #newMealCalories>
      </div>
      <button (click)="addMeal(newMealName, newMealDetails, newMealCalories)" class="btn btn-success btn-lg add-button">Add Meal</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMealName: HTMLInputElement, userMealDetails: HTMLInputElement, userMealCalories: HTMLInputElement){
    var myNewMeal = new Meal(userMealName.value, userMealDetails.value, parseInt(userMealCalories.value), 0);
   this.onSubmitNewMeal.emit(myNewMeal);

 }

}
