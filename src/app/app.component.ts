import { Component, Input, OnInit } from '@angular/core';
import * as uniqid from 'uniqid';
import { Item } from './models/Item';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'To-do List';
  TaskService: TasksService = new TasksService()
  toDoList!: Item[];
  data = window.localStorage.getItem('todolist');

  ngOnInit() {
    this.toDoList = this.TaskService.getTasks()
  }


  addNewTask(newTask: string) {
    this.toDoList.push({
      text: newTask,
      finished: false,
      id: uniqid(),
    });

    window.localStorage.setItem('todolist', JSON.stringify(this.toDoList));
  }

  handleRemoveTask(item: Item) {
    this.toDoList.splice(this.toDoList.indexOf(item), 1);
    window.localStorage.setItem('todolist', JSON.stringify(this.toDoList));
  }

  handleFinishTask(item: Item) {
    const index = this.toDoList.indexOf(item);
    this.toDoList[index].finished = !this.toDoList[index].finished;
    window.localStorage.setItem('todolist', JSON.stringify(this.toDoList));
  }
}
