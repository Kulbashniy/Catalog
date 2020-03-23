import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public noUser: boolean = false;

  @Input() public opened: boolean;
  @Output() openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  changeOpened(val: boolean) {
    this.opened = val;
    this.openedChange.emit(this.opened);
  }
  @Output() userLogin: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  public close() {
    this.changeOpened(false);
  }

  public submit(form: NgForm) {
    let user = { login: form.value.login, password: form.value.password };
    if ((user.login == 'admin') && (user.password == 'admin')) {
      let curUser = new User(user.login, 'ADMIN');
      window.localStorage.setItem('CurrentUser', JSON.stringify(curUser));
      this.userLogin.emit(curUser);
      this.changeOpened(false);
    }
    else if ((user.login == 'user') && (user.password == 'qwerty')) {
      let curUser = new User(user.login, 'USER');
      window.localStorage.setItem('CurrentUser', JSON.stringify(curUser));
      this.userLogin.emit(curUser);
      this.changeOpened(false);
    }
    else {
      this.noUser = true;
    }
  }

}
