import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromQuizzes from './quizzes.reducer';

export const selectQuizzesState = createFeatureSelector<fromQuizzes.State>(
  fromQuizzes.quizzesFeatureKey
);

export const all = createSelector(
  selectQuizzesState,
  (state) => { state.items}
)