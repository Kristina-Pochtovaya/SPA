import { Injectable } from '@angular/core';
import { User } from './second-page/models/user.model';
import { users } from './second-page/second-page.component'
import { UserMore } from './third-page/models/userMore.model';
import { usersMore } from './third-page/third-page.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    getUsers(): User[] {
      return users;
    }

    getUsersMore(): UserMore[] {
      return usersMore;
    }

  constructor() { }
}
