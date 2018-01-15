import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-group-popup',
  templateUrl: './edit-group-popup.component.html',
  styleUrls: ['./edit-group-popup.component.css']
})
export class EditGroupPopupComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

}
