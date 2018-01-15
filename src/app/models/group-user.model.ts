import {FullUser} from './full-user.model';
import {Position} from './position.model';

export class GroupUser {
  public user: FullUser;
  public position: Position;

  constructor(user: FullUser,
              position: Position) {
    this.user = user;
    this.position = position;
  }
}
