// Question.ts

export interface Question {
    id: number;
    subject: string;
    content: string;
    create_date: string;
    answers: Answer[];
}

export interface Answer {
    id: number;
    content: string;
    create_date: number;
}
