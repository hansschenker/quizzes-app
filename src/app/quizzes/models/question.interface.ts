import { Answer } from './answer.interface';

export interface Question {
    id: number;
    title: string;
    answers: Answer[];
}