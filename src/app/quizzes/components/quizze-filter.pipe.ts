import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quizzeFilter'
})
export class QuizzeFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
