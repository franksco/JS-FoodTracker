import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredHealthyState = args[0];
    if(desiredHealthyState === "healthy") {
      return input.filter((meal) => {
        return meal.calories < 500;
      });
    } else if (desiredHealthyState === "unHealthy") {
      return input.filter((meal) => {
        return meal.calories >= 500;
      });
    }else {
      return input;
    }

  }
}
