import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {User} from '../models/user.model';
import {SidebarService} from '../services/side-bar.service';
import {TaskBarService} from '../services/task-bar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private user: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private sidebarService: SidebarService,
    private taskbarService: TaskBarService) {
  }

  @Output() featureSelected = new EventEmitter<string>();

  ngOnInit() {
    this.user = this.userService.getLocal();
  }


  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  signOut() {
    this.userService.writeLogoutTime();
    this.userService.deleteLocal();
    this.authService.signOut();
  }

  onSidebar() {
    this.sidebarService.openSideBar();
  }

  onTaskbar() {
    this.taskbarService.openTaskBar();
  }

  recordSignOutTime() {
    this.userService.writeLogoutTime();
  }

}





