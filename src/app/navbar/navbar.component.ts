import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {SidebarService} from '../services/side-bar.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReportDatepickerComponent} from '../modals/report-datepicker.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private user: User;
  isAdmin = false;
  isHead = false;
  isUser = false;

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private sidebarService: SidebarService,
              private modalService: NgbModal) {
  }

  @Output() featureSelected = new EventEmitter<string>();

  ngOnInit() {
    this.user = this.userService.getLocal();
    if (this.user.role === 'ROLE_ADMIN') {
      this.isAdmin = true;
      this.isHead = true;
      this.isUser = true;
    } else if (this.user.role === 'ROLE_HEAD') {
      this.isAdmin = false;
      this.isHead = true;
      this.isUser = true;
    } else if (this.user.role === 'ROLE_USER') {
      this.isAdmin = false;
      this.isHead = false;
      this.isUser = true;
    }
  }


  onSelect(feature: string) {
    // if (this.authService.isAuthenticated()) {
    this.featureSelected.emit(feature);
    // } else {
    //   this.router.navigate(['/signin']);
    // }
  }

  openReportDatepicker() {
    const modalRef = this.modalService.open(ReportDatepickerComponent);
  }

}
