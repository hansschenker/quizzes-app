import { Quizze } from '../../models/quizze.interface';
import { createAction, props } from '@ngrx/store';

export const loadQuizzess = createAction(
  '[Quizzes] Load Quizzess'
);
export const enterPage = createAction("[Quizzes Page] Enter");

export const loadQuizzessSuccess = createAction(
  '[Quizzes] Load Quizzess Success',
  props<{ items: Quizze[] }>()
);

export const loadQuizzessFailure = createAction(
  '[Quizzes] Load Quizzess Failure',
  props<{ error: string }>()
);


export const selectBook = createAction(
  "[Quizzes Page] Select Quizze",
  props<{ quizzeId: number }>()
);

export const clearSelectedQuizze = createAction(
  "[Quizzes Page] Clear Selected Quizze"
);

export const createQuizze = createAction(
  "[Quizzes Page] Create Quizze",
  props<{ quizze: Quizze }>()
);

export const updateQuizze = createAction(
  "[Quizzes Page] Update Quizze",
  props<{ quizzeId: number; changes: Quizze }>()
);

export const deleteQuizze = createAction(
  "[Quizzes Page] Delete Quizze",
  props<{ quizzeId: number }>()
);
