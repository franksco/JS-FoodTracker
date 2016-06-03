import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div class="form-group">
    <label>{{ meal.name }}, {{  meal.details}}, {{ meal.calories}}</label>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
