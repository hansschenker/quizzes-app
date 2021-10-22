import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as QuizzesActions from './actions/quizzes-page.actions';



@Injectable()
export class QuizzesEffects {

  loadQuizzess$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(QuizzesActions.loadQuizzess),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => QuizzesActions.loadQuizzessSuccess({ items: data })),
          catchError(error => of(QuizzesActions.loadQuizzessFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
