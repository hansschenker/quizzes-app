import { Component } from '@angular/core';

@Component({
  selector: 'hs-root',
  template: `
    <ul>
      <li><a  routerLink="/">Home</a></li>
      <li><a  routerLink="quizzes">Quizzes</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'quizzes-app';
}
