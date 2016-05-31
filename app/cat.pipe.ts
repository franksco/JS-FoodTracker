import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "cat",
  pure: false
})
export class CatPipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredCatState = args[0];
    if(desiredCatState === "home") {
      return input.filter((task) => {
        return task.category === "home";
      });
    } else if (desiredCatState === "work") {
      return input.filter((task) => {
        return task.category === 'work';
      });
    } else if (desiredCatState === "hobby") {
      return input.filter((task) => {
        return task.category === 'hobby';
      });
    }else {
      return input;
    }

  }
}
