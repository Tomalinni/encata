export class User {
  public id: string;
  public role: string;
  public fullName: string;
  public access: boolean;
  public testing: boolean;
  public status: string;

  constructor(id: string,
              role: string,
              fName: string,
              access: boolean,
              testing: boolean,
              status: string) {
    this.id = id;
    this.role = role;
    this.fullName = fName;
    this.access = access;
    this.testing = testing;
    this.status = status;
  }

}
