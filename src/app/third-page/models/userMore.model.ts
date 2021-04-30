export interface IUserMoreDto {
  idx?: number;
  male: string;
  children: boolean;
  job: boolean;
}

export class UserMore {
  male: string;

  children: boolean;

  job: boolean;

  constructor(UserDataMore: IUserMoreDto) {
    this.male = UserDataMore.male;
    this.children = UserDataMore.children;
    this.job = UserDataMore.job;
  }
}
