import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { _CATEGORIES } from '../../const/categories';
import { CategoriesPageService } from '../../services/categories-page.service';
import { Category } from '../../models/Category';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import {
  DialogService,
  DialogRef,
  DialogCloseResult
} from '@progress/kendo-angular-dialog';
import { Subscription } from 'rxjs';
import { TovarPageService } from '../../services/tovar-page.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit, OnDestroy {

  public gridData = [];

  public user: User = new User();

  public listItems = ['Tam2', 'TUt1'];

  public currentCategory: Category;
  public categoryWindowOpened: boolean = false;

  public replaceCategoryWindowOpened: boolean = false;
  public catWithoutCurrent: Category[];

  private subscriptions: Subscription[] = [];

  constructor(private categoryService: CategoriesPageService, private userService: UserService, private tovarService: TovarPageService, private dialogService: DialogService, private ngZone: NgZone) { }

  ngOnInit() {
    const catSub = this.categoryService.categories$.subscribe((data) => {
      if (!data) {
        return;
      }
      this.ngZone.run(() => {
        this.gridData = data;
      })      
    })
    this.categoryService.getAllCategories();
    const userSub = this.userService.user$.subscribe((data) => {
      if (!data) {
        return;
      }
      this.ngZone.run(() => {
        this.user = data;
      })
    });
    this.userService.loadUser();

    this.subscriptions.push(catSub);
    this.subscriptions.push(userSub);
  }

  onRemoveCategory(category: Category) {
    const dialog: DialogRef = this.dialogService.open({
      title: 'Удаление категории',
      content: 'Вы действительно хотите удалить - ' + category.Name + '?',
      actions: [
        { text: 'Нет' },
        { text: 'Да', primary: true }
      ],
      width: 450,
      height: 200,
      minWidth: 250
    });

    const dialogSub = dialog.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        return;
      }
      else if (result.text == 'Да') {
        if (this.tovarService.hasCategory(category)) {
          this.ngZone.run(() => {
            this.catWithoutCurrent = this.categoryService.loadAllCategories();
            this.catWithoutCurrent = this.catWithoutCurrent.filter((cat) => { return cat.ID != category.ID });
            this.currentCategory = category;
            this.replaceCategoryWindowOpened = true;
          })
        }
        else {
          this.categoryService.removeCategory(category);
        }
      }
    });
    this.subscriptions.push(dialogSub);
  }

  onChangeCategory(category: Category) {
    this.currentCategory = category;
    this.categoryWindowOpened = true;
  }

  onAddCategory() {
    this.currentCategory = new Category();
    this.categoryWindowOpened = true;
  }


  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}
