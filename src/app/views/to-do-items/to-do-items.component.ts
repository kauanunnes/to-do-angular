import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css'],
})
export class ToDoItemsComponent implements OnInit {
  @Input() toDoList!: Item[];
  @Output() removeTask = new EventEmitter();
  @Output() finishedTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleRemoveTask(item: Item): void {
    this.removeTask.emit(item);
  }

  handleFinished(event: Event, item: Item) {
    this.finishedTask.emit(item);
  }
}
