export interface IUserDto {
  index?: number;
  firstName: string;
  lastName: string;
  ages: string;
  email: string;
  password: string;
}

export class User {
  firstName: string;

  lastName: string;

  ages: string;

  email: string;

  password: string;

  constructor(UserData: IUserDto) {
    this.firstName = UserData.firstName;
    this.lastName = UserData.lastName;
    this.ages = UserData.ages;
    this.email = UserData.email;
    this.password = UserData.password;
  }
}
