import { Component, Input, OnInit } from '@angular/core';
import * as uniqid from 'uniqid';
import { Item } from './models/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'To-do List';
  toDoList: Item[] = [];
  data = window.localStorage.getItem('todolist');

  ngOnInit() {
    if (!this.data) {
      window.localStorage.setItem('todolist', '[]');
      this.toDoList = [];
    } else {
      this.toDoList = JSON.parse(this.data).map((task: Item) => {
        return task;
      });
    }

  }

  addNewTask(event: Event) {
    event.preventDefault();
    const input: HTMLInputElement = <HTMLInputElement>(
      document.querySelector('input')
    );
    if (!input.value) return;

    this.toDoList.push({
      text: input.value,
      finished: false,
      id: uniqid(),
    });

    input.value = '';
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
