import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1 class="header">To-Do List</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
     constructor(){
       this.meals = [
        new Meal("Oatmeal", "with raisins, and little brown sugar", 450, 0),
        new Meal("Carrots with Ranch", "1 cup of carrots and a 1/4 ranch", 150, 1),
        new Meal("Bacon Cheeseburger", "got extra bacon", 800, 2),
        new Meal("Cheesecake", "the raspberry kind", 650, 3)
      ];
     }
  mealWasSelected(clickedMeal: Meal): void {
  }
}
