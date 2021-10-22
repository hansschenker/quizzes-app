import { Observable } from 'rxjs';
import { Quizze } from './models/quizze.interface';
import { QuizzeService } from './quizze.service';
import { Component, OnInit } from '@angular/core';
// ngrx
import { AppState } from './../store/index';
import { Store } from '@ngrx/store';
import { loadQuizzess } from './state/actions/quizzes-page.actions';

@Component({
  selector: 'hs-quizzes',
  template: `

      <quizze-list 
        [quizzes$]="quizzes$" 
        (selected)="onSelected($event)"
        (deleted)="onDeleted($event)" >
      </quizze-list>
      <router-outlet></router-outlet>
    
  `,
  styles: [
  ]
})
export class QuizzesPage implements OnInit {

  quizzes$!: Observable<Quizze[]>
  constructor( private store: Store<AppState> ,private svc: QuizzeService) {
    //this.quizzes$ = svc.quizzes;
   }

  ngOnInit(): void {
    this.store.dispatch( loadQuizzess());
    this.quizzes$ = this.store.select(state => state.quizzesFeature.items)
  }
  onSelected(quizze: Quizze) {
    console.log("selected:", quizze);
  }
  onDeleted(quizze: Quizze) {
    console.log("deleted:", quizze);
  }

}
