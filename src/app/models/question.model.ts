import {Answer} from './answer.model';

export class Question {
  public answers: Answer[];
  public questionText: string;
  public rightAnswer: Answer;

  constructor(answers: Answer[], questionText: string, rightAnswer: Answer) {
    this.answers = answers;
    this.questionText = questionText;
    this.rightAnswer = rightAnswer;
  }
}
