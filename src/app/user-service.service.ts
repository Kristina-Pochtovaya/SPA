import { Injectable } from '@angular/core';
import { IUserDto, User } from './second-page/models/user.model';
import { IUserMoreDto, UserMore } from './third-page/models/userMore.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  myUsers: User[]=[];

  myUsersMore: UserMore[]=[];

  changeUser(index: number, newUser: IUserDto) {
    this.myUsers.splice(index, 1, new User(newUser));
  }

  changeUserMore(index: number, newUser: IUserMoreDto) {
    this.myUsersMore.splice(index, 1, new UserMore(newUser));
  }
}

export default UserService;
