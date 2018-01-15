import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-standards',
  templateUrl: './view-standards.component.html',
  styleUrls: ['./view-standards.component.css']
})
export class ViewStandardsComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

}
