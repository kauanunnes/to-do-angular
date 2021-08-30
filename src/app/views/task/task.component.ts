import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Item;
  @Output() removeTask = new EventEmitter();
  @Output() finishedTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleRemoveTask(item: Item): void {
    this.removeTask.emit(item);
  }

  handleFinished(event: Event, item: Item) {
    const input: HTMLInputElement = <HTMLInputElement>event.currentTarget;
    const tr: HTMLTableRowElement = <HTMLTableRowElement>(
      input.parentElement?.parentElement
    );
    tr.className = 'done';
    tr.className = input.checked ? 'done' : '';
    this.finishedTask.emit(item);
  }
}
