import {Injectable} from '@angular/core';

@Injectable()
export class TaskBarService {

  isOpen = true;

  openTaskBar() {
    this.isOpen = !this.isOpen;
  }

}
