export class User {
    firstName: string;
    lastName: string;
    ages: number;
    email: string;
    password: string;

    constructor(firstName: string, lastName: string, ages: number,    email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ages = ages;
        this.email = email;
        this.password = password;
    }
}