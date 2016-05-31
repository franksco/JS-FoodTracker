import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form">
      <h3>Create Task:</h3>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <select class="form-control" class="col-sm-8 input-lg" #newPriority>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <select class="form-control" class="col-sm-8 input-lg" #newCategory>
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="hobby">Hobby</option>
      </select>
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
