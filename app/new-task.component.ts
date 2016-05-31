import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form">
      <h3>Create Task:</h3>
      <div class="col-md-4">
        <input placeholder="Description" class="input-lg" #newDescription>
      </div>
      <div class="col-md-4">
        <select class="form-control" class="input-lg" #newPriority>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div class="col-md-4">
        <select class="form-control" class="input-lg" #newCategory>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="hobby">Hobby</option>
        </select>
      </div>
      <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<Task>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement, userCategory: HTMLInputElement){
    var arrayofString = [userDescription.value, userPriority.value];
    var myNewTask = new Task(userDescription.value, 0, userPriority.value, userCategory.value);
   this.onSubmitNewTask.emit(myNewTask);

 }

}
