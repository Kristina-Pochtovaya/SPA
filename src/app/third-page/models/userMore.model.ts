import { IUserMoreDto } from '../third-page.component';

export class UserMore {
    Male: string;
    Children: boolean;
    Job: boolean;

    constructor(UserDataMore: IUserMoreDto) {
        this.Male = UserDataMore.male;
        this.Children = UserDataMore.children;
        this.Job = UserDataMore.job;
    }
}