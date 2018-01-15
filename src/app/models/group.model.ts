import {Schedule} from './schedule.model';
import {FullUser} from './full-user.model';
import {Position} from './position.model';
import {GroupUser} from './group-user.model';

export class Group {
  public id: string;
  public name: string;

  public positions: Position[];
  public activeUsers: GroupUser[];
  public inactiveUsers: GroupUser[];
  public head: FullUser;
  public deputy: FullUser;
  public signBranch: boolean;
  public workSchedule: Schedule;

  constructor(id: string,
              name: string,
              positions: Position[],
              activeUsers: GroupUser[],
              inactiveUsers: GroupUser[],
              head: FullUser,
              deputy: FullUser,
              signBranch: boolean,
              workSchedule: Schedule
              ) {
    this.id = id;
    this.name = name;
    this.positions = positions;
    this.activeUsers = activeUsers;
    this.inactiveUsers = inactiveUsers;
    this.head = head;
    this.deputy = deputy;
    this.signBranch = signBranch;
    this.workSchedule = workSchedule;
  }
}
