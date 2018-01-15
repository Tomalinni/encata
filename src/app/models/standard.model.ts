import {Blank} from './blank.model';
import {Question} from './question.model';
import {Group} from './group.model';
import {FullUser} from './full-user.model';
import {Position} from './position.model';
import {Status} from './status.model';

export class Standard {
  public id: string;
  public number: string;
  public author: FullUser;

  public ruAnnotation: string;
  public ruName: string;
  public ruType: string;

  public enAnnotation: string;
  public enName: string;
  public enType: string;

  public status: Status;

  public englishQuestions: Question[];
  public russianQuestions: Question[];

  public blanks: Blank[];

  public linkedGroups: Group[];
  public linkedUsers: FullUser[];
  public linkedPositions: Position[];

  public ruDoc: string;
  public ruPdf: string;
  public ruPpt: string;
  public enDoc: string;
  public enPdf: string;
  public enPpt: string;

  constructor(id: string, number: string, author: FullUser, ruAnnotation: string, ruName: string, ruType: string,
              enAnnotation: string, enName: string, enType: string, status: Status, englishQuestions: Question[],
              russianQuestions: Question[], blanks: Blank[], linkedGroups: Group[], linkedUsers: FullUser[],
              linkedPositions: Position[], ruDoc: string, ruPdf: string, ruPpt: string, enDoc: string, enPdf: string,
              enPpt: string) {
    this.id = id;
    this.number = number;
    this.author = author;
    this.ruAnnotation = ruAnnotation;
    this.ruName = ruName;
    this.ruType = ruType;
    this.enAnnotation = enAnnotation;
    this.enName = enName;
    this.enType = enType;
    this.status = status;
    this.englishQuestions = englishQuestions;
    this.russianQuestions = russianQuestions;
    this.blanks = blanks;
    this.linkedGroups = linkedGroups;
    this.linkedUsers = linkedUsers;
    this.linkedPositions = linkedPositions;
    this.ruDoc = ruDoc;
    this.ruPdf = ruPdf;
    this.ruPpt = ruPpt;
    this.enDoc = enDoc;
    this.enPdf = enPdf;
    this.enPpt = enPpt;
  }
}
