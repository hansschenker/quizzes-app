import { Action, createReducer, on } from '@ngrx/store';

// quizzes feature
import * as QuizzesActions from './actions/quizzes-page.actions';
import { Viewmodel, Viewstatus } from './../models/viewmodel';
import { Quizze } from './../models/quizze.interface';

export const quizzesFeatureKey = 'quizzesFeature';


export interface State extends Viewmodel<Quizze> {
  items: Quizze[];
  status: Viewstatus;
  message: string;
  activeItemId: number | null;
}

export const initialState: State = {
  status: "idle",
  message: "",
  items: [],
  activeItemId:  null,
};


export const reducer = createReducer(
  initialState,

  on(QuizzesActions.loadQuizzess, state => state),
  on(QuizzesActions.loadQuizzessSuccess, (state, action) => {
    return {
      ...state,
      items: action.items
    };
  }),
  on(QuizzesActions.loadQuizzessFailure, (state, action) => state),

);

