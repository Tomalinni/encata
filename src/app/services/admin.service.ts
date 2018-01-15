import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {ApiConnectService} from './api-connect.service';

@Injectable()
export class AdminService {

  // *** Here all the functionality of the administrator ***;

  constructor(private http: Http,
              private apiURL: ApiConnectService) {
  }

  /*
   CREATES POST
   */

  // Create schedules
  createSchedule(schedule) {
    // return this.http.post('http://localhost:3000/schedules', schedule);
    return this.http.post(this.apiURL.createSchedule, schedule);
  }

  // Create position
  createPosition(position, groudID) {
    // return this.http.post('http://localhost:3000/positions', position);
    return this.http.post(this.apiURL.createPosition + groudID + '/position', position);
  }

  // Create fullUser
  createFullUser(user, group, position) {

    // send 3 in 1
    const createUserAllObjects = {
      user,
      group,
      position
    };
    console.log(createUserAllObjects);
    // send createUserAllObjects
    // return this.http.post('http://localhost:3000/fullUsers', user);
    return this.http.post(this.apiURL.createUser, createUserAllObjects);
  }

  // Create group
  createGroup(group) {
    // return this.http.post('http://localhost:3000/groups', group);
    return this.http.post(this.apiURL.createGroup, group);
  }

  sendFile(file) {
    // set headers
    // return this.http.post('http://localhost:3000/files', file);
    return this.http.post(this.apiURL.addFileToStandard, file);
  }

  /*
   GETTERS GET
   */
  getAllFullUsers() {
    // return this.http.get('http://localhost:3000/fullUsers/');
    return this.http.get(this.apiURL.getAllUsers);
  }

  getSchedules() {
    // return this.http.get('http://localhost:3000/schedules/');
    return this.http.get(this.apiURL.getAllSchedules);
  }

  getAllGroups() {
    // return this.http.get('http://localhost:3000/groups/');
    return this.http.get(this.apiURL.getAllGroups);
  }

  getAllPositions() {
    // GET POSITIONS FROM GROUP
    // return this.http.get('http://localhost:3000/positions/');
  }

  getGroupByID(groupID) {
    // return this.http.get('http://localhost:3000/groups/' + groupID);
    return this.http.get(this.apiURL.getGroupById + groupID);
  }

  getAllStandards() {
    // return this.http.get('http://localhost:3000/groups/' + groupID);
    return this.http.get(this.apiURL.getAllStandards);
  }

  getUserOutSide(groupID) {
    return this.http.get(this.apiURL.getUsersOutsideOfGroup + groupID);
  }

  putUserOfGroup(groupID, userID, positionID) {
    return this.http.patch(this.apiURL.putUserOfGroup + groupID + '/adduser/' + userID + '/' + positionID, null);
  }

  setHeadsForGroup(groupID, headID, deputyID) {
    return this.http.patch(this.apiURL.setHeadsForGroup + groupID + '/setheads/' + headID + '/' + deputyID, null);
  }

  changeUserStatusInGroup(groupID, userID, status: string) {
    const header = new Headers({
      'current-status': status
    });
    console.log(header);
    return this.http.patch(this.apiURL.changeUserStatusInGroup + groupID + '/' + userID + '/status', null, {headers: header});
  }

  /*
   UPDATERS PATCH*/

  getStandard(standardId: string) {
    return this.http.get(this.apiURL.getStandard + standardId);
  }
}
