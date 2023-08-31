// Question.ts

export interface Question {
    id: number;
    subject: string;
    content: string;
    create_date: number;
    answers: Answer[];
}

export interface Answer {
    id: number;
    content: string;
    create_date: number;
}
