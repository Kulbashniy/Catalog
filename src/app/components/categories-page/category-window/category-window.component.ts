import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../models/Category';
import { NgForm } from '@angular/forms';
import { CategoriesPageService } from '../../../services/categories-page.service';

@Component({
  selector: 'app-category-window',
  templateUrl: './category-window.component.html',
  styleUrls: ['./category-window.component.scss']
})
export class CategoryWindowComponent implements OnInit {

  @Input() public opened: boolean;
  @Output() public openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  changeOpened(val: boolean) {
    this.opened = val;
    this.openedChange.emit(this.opened);
  }

  @Input() public category: Category;

  constructor(private categoryService: CategoriesPageService) { }

  ngOnInit() {
  }

  public close() {
    this.changeOpened(false);
  }

  public submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.category.ID) {
      this.categoryService.changeCategory(this.category);
    }
    else {
      Category.Add(this.category.Name).then((data) => {
        this.categoryService.addCategory(data);
      })
    }
    this.close();
  }
}
