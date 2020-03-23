import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor() { }

  loadUser() {
    let result: User = new User();
    const currentUser = window.localStorage.getItem('CurrentUser');
    if (currentUser) {
      let user = JSON.parse(currentUser);
      result.Authorized = user.Authorized;
      result.IsAdmin = user.IsAdmin;
      result.DisplayName = user.DisplayName;
    }
    this.user$.next(result);
  }
}
