export interface IUserDto {
  index?: number;
  firstName: string;
  lastName: string;
  ages: string;
  email: string;
  password: string;
}

export class User {
  FirstName: string;

  LastName: string;

  Ages: string;

  Email: string;

  Password: string;

  constructor(UserData: IUserDto) {
    this.FirstName = UserData.firstName;
    this.LastName = UserData.lastName;
    this.Ages = UserData.ages;
    this.Email = UserData.email;
    this.Password = UserData.password;
  }
}
