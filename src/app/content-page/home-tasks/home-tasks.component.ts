import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrls: ['./home-tasks.component.css']
})
export class HomeTasksComponent implements OnInit {

  private isLoaded = true; // false

  constructor() {
  }

  ngOnInit() {
  }

  // get tasks
  // this.isLoaded = true;




}
