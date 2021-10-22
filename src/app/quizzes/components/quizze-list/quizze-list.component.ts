import { Observable } from 'rxjs';
import { Quizze } from './../../models/quizze.interface';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'quizze-list',
  template: `
    <!-- <pre>
      {{ quizzes$ | async | json}}
    </pre> -->
    <ul>
      <li *ngFor="let quizze of quizzes$ | async" (click)="selected.emit(quizze)" >
            {{ quizze.title }} 
            <span (click)="deleted.emit(quizze)"  > X </span>
            <!-- <span (click)="deleted.emit($event); $event.stopImmediatePropagation()" > X </span> -->
      </li>
    </ul>
  `,
  styles: [
    `
    .quiz-container {
      display: flex;
    }
    .quiz-title {
      width: 200px;
      margin-bottom: .25em;
    }
    `
  ]
})
export class QuizzeListComponent implements OnInit {

  @Input()
  quizzes$!: Observable<Quizze[]>;
  @Output() selected = new EventEmitter<Quizze>();
  @Output() deleted = new EventEmitter<Quizze>();
  constructor() { }
  
  ngOnInit(): void {
  }
  onSelected() {

  }
}
