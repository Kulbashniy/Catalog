import { Component, OnInit, NgZone } from '@angular/core';
import { _CATEGORIES } from '../../const/categories';
import { CategoriesPageService } from '../../services/categories-page.service';
import { Category } from '../../models/Category';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

  public gridData = [];

  public user: User = new User();


  constructor(private categoryService: CategoriesPageService, private userService: UserService, private ngZone: NgZone) { }

  ngOnInit() {
    this.categoryService.categories$.subscribe((data) => {
      if (!data) {
        return;
      }
      this.ngZone.run(() => {
        this.gridData = data;
      })      
    })
    this.categoryService.getAllCategories();
    this.userService.user$.subscribe((data) => {
      if (!data) {
        return;
      }
      this.ngZone.run(() => {
        this.user = data;
      })
    });
    this.userService.loadUser();
  }

  onRemoveCategory(category: Category) {
    console.log(category);
  }

}
