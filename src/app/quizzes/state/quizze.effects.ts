import { Quizze } from './../models/quizze.interface';
import { QuizzeService } from './../quizze.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as QuizzesPageActions from "./actions/quizzes-page.actions";
import { exhaustMap, map } from 'rxjs/operators';


@Injectable()
export class QuizzeEffects {



  constructor(private actions$: Actions, private svc: QuizzeService) {}

  loadQuizzes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizzesPageActions.loadQuizzess),
      exhaustMap(() => {
          return this.svc.quizzes.pipe( map((quizzes: Quizze[] )=> QuizzesPageActions.loadQuizzessSuccess({items: quizzes})))
        }
      )
    )
  )
}
