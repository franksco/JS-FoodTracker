import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import {DonePipe} from './done.pipe';
import {CatPipe} from './cat.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe, CatPipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  templateUrl: 'app/task-list.component.html'
})

export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  public filterDone: string = "notDone";
  public filterCat: string = "all";
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(newTask: Task): void {
    newTask.id = this.taskList.length;
    this.taskList.push(newTask);
  }
  onChangeDone(filterOption) {
    this.filterDone = filterOption;
  }
  onChangeCat(filterOption) {
    this.filterCat = filterOption;
  }
}
