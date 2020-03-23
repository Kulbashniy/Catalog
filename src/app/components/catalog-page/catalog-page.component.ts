import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  public user: User = new User();

  constructor() { }

  ngOnInit() {
    const currentUser = window.localStorage.getItem('CurrentUser');
    if (currentUser) {
      let user = JSON.parse(currentUser);
      this.user.Authorized = user.Authorized;
      this.user.IsAdmin = user.IsAdmin;
      this.user.DisplayName = user.DisplayName;
    }
  }

}
