export interface IUserMoreDto {
  idx?: number;
  male: string;
  children: boolean;
  job: boolean;
}

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
