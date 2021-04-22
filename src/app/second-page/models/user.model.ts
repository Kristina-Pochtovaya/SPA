import { IUserDto } from '../second-page.component'

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