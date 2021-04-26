import { Injectable } from '@angular/core';
import { User } from './second-page/models/user.model';
import { UserMore } from './third-page/models/userMore.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   myUsers: User[]=[];
   myUsersMore: UserMore[]=[];

      getUsers(users: User[]): User[] {
        this.myUsers= this.myUsers.concat(users)
        return this.myUsers;
      }

      updateUsers(users: User[]): User[] {
        this.myUsers=users;
        return this.myUsers;
      }

      getUsersMore(usersMore: UserMore[]): UserMore[] {
        this.myUsersMore= this.myUsersMore.concat(usersMore)
        return this.myUsersMore;
      }

      updateUsersMore(usersMore: UserMore[]): UserMore[] {
        this.myUsersMore=usersMore;
        return this.myUsersMore;
      }

  constructor() { }
}
