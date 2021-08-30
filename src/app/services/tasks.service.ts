import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks!: Item[]
  constructor() {
  }

  getTasks():Item[] {
    const data = window.localStorage.getItem('todolist');
    if (!data) {
      window.localStorage.setItem('todolist', '[]');
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(data).map((task: Item) => {
        return task;
      });
    }
    return this.tasks
  }
}
