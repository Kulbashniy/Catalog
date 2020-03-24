import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../models/Category';
import { CategoriesPageService } from '../../../services/categories-page.service';
import { NgForm } from '@angular/forms';
import { TovarPageService } from '../../../services/tovar-page.service';

@Component({
  selector: 'app-replace-category-window',
  templateUrl: './replace-category-window.component.html',
  styleUrls: ['./replace-category-window.component.scss']
})
export class ReplaceCategoryWindowComponent implements OnInit {

  @Input() public opened: boolean;
  @Output() public openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  changeOpened(val: boolean) {
    this.opened = val;
    this.openedChange.emit(this.opened);
  }
  @Input() public category: Category;
  @Input() public anotherCategories: Category[];

  public newCategories: Category[] = [];

  constructor(private categoryService: CategoriesPageService, private tovarService: TovarPageService) { }

  ngOnInit() {
    
  }

  public close() {
    this.changeOpened(false);
  }

  public submit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    let tovars = this.tovarService.getTovarsByCategoryID(this.category.ID);
    tovars.forEach((tovar) => {
      tovar.Categories = this.newCategories;
      console.log(tovar);
      this.tovarService.change(tovar);
    })
    console.log(this.tovarService.getall());
    this.categoryService.removeCategory(this.category);
    this.close();
  }

}
