import {Injectable} from '@angular/core';

@Injectable()
export class TaskDescService {

  private modalTaskInfo = {
    source: 'Source',
    number: 'Number',
    description: 'Description',
    author: 'Author',
    startDate: 'Start Date',
    date: 'Date',
    executor: 'Executor',
    endDate: 'End Date',
    deadLine: 'Deadline'
  };

  constructor() {
  }

  setModalTaskInfo(source, number, description, author, startDate, date, executor, endDate, deadLine) {
    this.modalTaskInfo.source = source;
    this.modalTaskInfo.number = number;
    this.modalTaskInfo.description = description;
    this.modalTaskInfo.author = author;
    this.modalTaskInfo.startDate = startDate;
    this.modalTaskInfo.date = date;
    this.modalTaskInfo.executor = executor;
    this.modalTaskInfo.endDate = endDate;
    this.modalTaskInfo.deadLine = deadLine;
  }

  getModalTaskInfo() {
    return this.modalTaskInfo;
  }

}
