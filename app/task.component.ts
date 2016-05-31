import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({
    selector: 'task-display',
    inputs: ['task'],
  template: `
  <div class="mycheckbox">
    <input *ngIf="task.done" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!task.done" type="checkbox" (click)="toggleDone(true)"/>
    <label><del *ngIf="task.done">{{ task.description }}, {{ task.priority}}, {{ task.category}}</del><span *ngIf="!task.done">{{ task.description }}, {{  task.priority}}, {{ task.category}}</span></label>
  </div>
  `
})

export class TaskComponent {
  public task: Task;
  toggleDone(setState: boolean){
    this.task.done = setState;
  }
}
