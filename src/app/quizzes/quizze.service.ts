import { Observable } from 'rxjs';
import { Quizze } from './models/quizze.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class QuizzeService {

  quizzes: Observable<Quizze[]> = this.http.get<Quizze[]>('api/quizzes',httpOptions)
  constructor(private http: HttpClient) { }

  postQuizze(quizze: Quizze): Observable<Quizze> {
      return this.http.post<Quizze>('api/quizzes',httpOptions)
  }
  updateQuizze(){}
  deleteQuizze(){}
}
