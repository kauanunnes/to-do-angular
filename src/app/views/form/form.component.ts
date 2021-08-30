import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() addNewTask = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleAddNewTask(event: Event) {
    event.preventDefault();
    const input: HTMLInputElement = <HTMLInputElement>(
      document.querySelector('input')
    );
    if (!input.value) return;

    this.addNewTask.emit(input.value);
    input.value = '';
  }
}
