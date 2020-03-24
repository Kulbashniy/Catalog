import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { CategoriesPageService } from '../../services/categories-page.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { TovarPageService } from '../../services/tovar-page.service';
import { User } from '../../models/User';
import { Tovar } from '../../models/Tovar';
import { DialogCloseResult, DialogRef, DialogService } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-tovars-page',
  templateUrl: './tovars-page.component.html',
  styleUrls: ['./tovars-page.component.scss']
})
export class TovarsPageComponent implements OnInit, OnDestroy {

  public user: User = new User();

  public tovars: Tovar[] = [];

  public tovarWindowOpened: boolean = false;
  public currentTovar: Tovar;

  private subscriptions: Subscription[] = [];

  constructor(private categoryService: CategoriesPageService, private userService: UserService, private tovarService: TovarPageService, private ngZone: NgZone, private dialogService: DialogService) { }

  ngOnInit() {
    const tovarSub = this.tovarService.tovars$.subscribe((data) => {
      if (!data) {
        return;
      }
      this.ngZone.run(() => {
        this.tovars = data;
      });
    })
    this.tovarService.loadall();

    const userSub = this.userService.user$.subscribe((data) => {
      if (!data) {
        return;
      }
      this.ngZone.run(() => {
        this.user = data;
      })
    });
    this.userService.loadUser();

    this.subscriptions.push(userSub);
    this.subscriptions.push(tovarSub);
  }

  public onChangeTovar(tovar: Tovar) {
    this.currentTovar = tovar;
    this.currentTovar.DateEnd = new Date(this.currentTovar.DateEnd);
    this.tovarWindowOpened = true;
    console.log(this.currentTovar);
  }

  public onAddTovar() {
    this.currentTovar = new Tovar();
    this.currentTovar.DateEnd = new Date();
    this.tovarWindowOpened = true;
  }

  public onRemoveTovar(tovar: Tovar) {
    const dialog: DialogRef = this.dialogService.open({
      title: 'Удаление товара',
      content: 'Вы действительно хотите удалить - ' + tovar.Name + '?',
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
        this.tovarService.remove(tovar);
      }
    });
    this.subscriptions.push(dialogSub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}
