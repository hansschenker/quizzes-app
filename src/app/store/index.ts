import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromQuizzes from '../quizzes/state/quizzes.reducer';


export interface AppState {

  [fromQuizzes.quizzesFeatureKey]: fromQuizzes.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromQuizzes.quizzesFeatureKey]: fromQuizzes.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
