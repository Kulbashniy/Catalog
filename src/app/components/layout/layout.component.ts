import { Component, OnInit, NgZone } from '@angular/core';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public user: User = new User();

  public loginOpened: boolean = false;

  constructor(private router: Router, private userService: UserService, private ngZone: NgZone) { }

  ngOnInit() {
    this.userService.user$.subscribe((data) => {
      if (!data) {
        return;
      }
      this.ngZone.run(() => {
        this.user = data;
      })
    })
    this.userService.loadUser();
  }

  public onLogInClick() {
    this.loginOpened = true;
  }

  public onLogOutClick() {
    this.user = new User();
    window.localStorage.removeItem('CurrentUser');
    this.router.navigate(['catalog']);
  }

  public userLogin(user: User) {
    this.user = user;
  }
}
