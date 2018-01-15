import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SigninComponent} from './auth/signin/signin.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContentPageComponent} from './content-page/content-page.component';
import {RouterModule, Routes} from '@angular/router';
import {Http, HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {MyGroupsComponent} from './content-page/my-groups/my-groups.component';
import {MyStandardsComponent} from './content-page/my-standards/my-standards.component';
import {MyWorkingReportComponent} from './content-page/my-working-report/my-working-report.component';
import {HomeTasksComponent} from './content-page/home-tasks/home-tasks.component';
import {MyProfileComponent} from './content-page/my-profile/my-profile.component';
import {DropdownDirective} from './header/dropdown.directive';

import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {CreateSchedulePopupComponent} from './content-page/admin/create-schedule-popup/create-schedule-popup.component';
import {ApiConnectService} from './services/api-connect.service';
import {AdminService} from './services/admin.service';
import {DatePickerModule} from 'angular-io-datepicker';
import {OverlayModule} from 'angular-io-overlay/src/overlay';
import {AngularFontAwesomeModule} from 'angular-font-awesome/angular-font-awesome';
import {CreateUserComponent} from './content-page/admin/create-user/create-user.component';
import {CreateGroupComponent} from './content-page/admin/create-group/create-group.component';
import {SidebarService} from './services/side-bar.service';
import {CreatePositionComponent} from './content-page/admin/create-position/create-position.component';
import {TasksPanelComponent} from './tasks-panel/tasks-panel.component';
import {CompanyStructureComponent} from './content-page/company-structure/company-structure.component';
import {CreateStandardComponent} from './content-page/admin/create-standard/create-standard.component';
import {AllStandardsComponent} from './content-page/admin/all-standards/all-standards.component';
import {EditStandardComponent} from './content-page/admin/edit-standard/edit-standard.component';
import {ViewStandardComponent} from './content-page/views/view-standard/view-standard.component';
import {ViewGroupComponent} from './content-page/views/view-group/view-group.component';
import {ViewUserProfileComponent} from './content-page/views/view-user-profile/view-user-profile.component';
import {ViewUserReportComponent} from './content-page/views/view-user-report/view-user-report.component';
import {ViewUserTasksComponent} from './content-page/views/view-user-tasks/view-user-tasks.component';
import {EditUserProfileComponent} from './content-page/views/edit-user-profile/edit-user-profile.component';
import {TaskFullviewPopupComponent} from './content-page/views/task-fullview-popup/task-fullview-popup.component';
import {TestingPageComponent} from './content-page/views/testing-page/testing-page.component';
import {ApiService} from './services/api.service';
import {TaskPipePipe} from './tasks-panel/task-pipe.pipe';
import {TaskDescService} from './services/task-desc.service';
import {TaskBarService} from './services/task-bar.service';
import {ErrorInterceptor} from './services/error-interceptor.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReportDatepickerComponent} from './modals/report-datepicker.component';
import {ReportService} from './services/report.service';
import { AddMemberPopupComponent } from './content-page/views/view-group/popups/add-member-popup/add-member-popup.component';
import { EditGroupPopupComponent } from './content-page/views/view-group/popups/edit-group-popup/edit-group-popup.component';
import { SetHeadDeputyComponent } from './content-page/views/view-group/popups/set-head-deputy/set-head-deputy.component';
import { ViewStandardsComponent } from './content-page/views/view-group/popups/view-standards/view-standards.component';
import { ConfirmationPopupComponent } from './content-page/views/view-group/popups/confirmation-popup/confirmation-popup.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard]},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    {path: '', component: HomeTasksComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeTasksComponent, canActivate: [AuthGuard]},
    {path: 'profile', component: MyProfileComponent, canActivate: [AuthGuard]},
    {path: 'groups', component: MyGroupsComponent, canActivate: [AuthGuard]},
    {path: 'standards', component: MyStandardsComponent, canActivate: [AuthGuard]},
    {path: 'report', component: MyWorkingReportComponent, canActivate: [AuthGuard]},
    {path: 'admin/create-schedule', component: CreateSchedulePopupComponent, canActivate: [AuthGuard]},
    {path: 'admin/register-user', component: CreateUserComponent, canActivate: [AuthGuard]},
    {path: 'admin/create-group', component: CreateGroupComponent, canActivate: [AuthGuard]},
    {path: 'admin/create-position', component: CreatePositionComponent, canActivate: [AuthGuard]},
    {path: 'company-structure', component: CompanyStructureComponent, canActivate: [AuthGuard]},
    {path: 'admin/create-standard', component: CreateStandardComponent, canActivate: [AuthGuard]},
    {path: 'admin/all-standards', component: AllStandardsComponent, canActivate: [AuthGuard]},
    {path: 'groups/:id', component: ViewGroupComponent, canActivate: [AuthGuard]},
    {path: 'standard/:id', component: ViewStandardComponent, canActivate: [AuthGuard]},
  ]
  },
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    NavbarComponent,
    DashboardComponent,
    ContentPageComponent,
    MyGroupsComponent,
    MyStandardsComponent,
    MyWorkingReportComponent,
    HomeTasksComponent,
    MyProfileComponent,
    DropdownDirective,
    CreateSchedulePopupComponent,
    CreateUserComponent,
    CreateGroupComponent,
    CreatePositionComponent,
    TasksPanelComponent,
    CompanyStructureComponent,
    CreateStandardComponent,
    AllStandardsComponent,
    EditStandardComponent,
    ViewStandardComponent,
    ViewGroupComponent,
    ViewUserProfileComponent,
    ViewUserReportComponent,
    ViewUserTasksComponent,
    EditUserProfileComponent,
    TaskFullviewPopupComponent,
    TestingPageComponent,
    ReportDatepickerComponent,
    TaskPipePipe,
    AddMemberPopupComponent,
    EditGroupPopupComponent,
    SetHeadDeputyComponent,
    ViewStandardsComponent,
    ConfirmationPopupComponent
  ],
  entryComponents: [
    AddMemberPopupComponent,
    EditGroupPopupComponent,
    SetHeadDeputyComponent,
    ViewStandardsComponent,
    ReportDatepickerComponent,
    ConfirmationPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    OverlayModule,
    DatePickerModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    { provide: Http, useClass: ErrorInterceptor },
    CookieService,
    AuthService,
    AuthGuard,
    UserService,
    SidebarService,
    TaskBarService,
    AdminService,
    ApiConnectService,
    ApiService,
    TaskDescService,
    ReportService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
