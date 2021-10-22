import { Question } from './question.interface';
import { Category } from './category.interface';

export interface Quizze {
    id: number;
    title: string;
    category: Category;
    questions: Question[];
}