export class FullUser {
  public id: string;
  public login: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public patronymicName: string;
  public dateOfEmployment: string; // "2017-01-01"
  public dateOfDismissal: string; // "2017-01-01"
  public language: string; // "RUSSIAN"
  public roles: any[]; // "USER"
  public schedule: {}; // id
  public status: string; // "ACTIVE"
  public internalNumber: string;
  public remoteAccessAllowed: boolean;
  public phone: string;
  public email: string;
  public testingDisabled: boolean;
  public mainGroup: string;

  constructor(login: string,
              password: string,
              firstName: string,
              lastName: string,
              patronymicName: string,
              dateOfEmployment: string,
              language: string,
              roles: any[],
              schedule: {},
              status: string,
              internalNumber: string,
              remoteAccessAllowed: boolean,
              phone: string,
              email: string,
              testingDisabled: boolean,
              mainGroup: string,
              id?: string) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymicName = patronymicName;
    this.dateOfEmployment = dateOfEmployment;
    this.language = language;
    this.roles = roles;
    this.schedule = schedule;
    this.status = status;
    this.internalNumber = internalNumber;
    this.remoteAccessAllowed = remoteAccessAllowed;
    this.phone = phone;
    this.email = email;
    this.testingDisabled = testingDisabled;
    this.mainGroup = mainGroup;
  }

}
