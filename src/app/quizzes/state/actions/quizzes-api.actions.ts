import { Quizze } from './../../models/quizze.interface';
import { createAction, props } from "@ngrx/store";

export const quizzesLoaded = createAction(
  "[Quizzes API] Quizzes Loaded Success",
  props<{ quizzes: Quizze[] }>()
);

export const bookCreated = createAction(
  "[Quizzes API] Quizze Created",
  props<{ quizze: Quizze }>()
);

export const bookUpdated = createAction(
  "[Quizzes API] Quizze Updated",
  props<{ quizze: Quizze }>()
);

export const bookDeleted = createAction(
  "[Quizzes API] Quizze Deleted",
  props<{ quizzeId: number }>()
);