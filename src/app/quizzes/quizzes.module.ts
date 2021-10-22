import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ngrx feature module
import { StoreModule } from '@ngrx/store';
import * as fromQuizzes from './state/quizzes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { QuizzesEffects } from './state/_quizzes.effects';
// quizzes feature
import { QuizzesPage } from './quizzes.page';
import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzeListComponent } from './components/quizze-list/quizze-list.component';
import { QuizzeFilterPipe } from './components/quizze-filter.pipe';
import { QuizzeAddComponent } from './components/quizze-add/quizze-add.component';
import { QuizzeFormComponent } from './components/quizze-form/quizze-form.component';
import { QuizzeItemComponent } from './components/quizze-item/quizze-item.component';
import { QuizzeEffects } from './state/quizze.effects';


@NgModule({
  declarations: [
    QuizzesPage,
    QuizzeListComponent,
    QuizzeFilterPipe,
    QuizzeAddComponent,
    QuizzeFormComponent,
    QuizzeItemComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    StoreModule.forFeature(fromQuizzes.quizzesFeatureKey, fromQuizzes.reducer),
    EffectsModule.forFeature([QuizzesEffects, QuizzeEffects])
  ]
})
export class QuizzesModule { }
