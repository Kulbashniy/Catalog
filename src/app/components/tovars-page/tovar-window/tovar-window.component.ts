import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tovar } from '../../../models/Tovar';
import { CategoriesPageService } from '../../../services/categories-page.service';
import { Category } from '../../../models/Category';
import { NgForm } from '@angular/forms';
import { TovarPageService } from '../../../services/tovar-page.service';

@Component({
  selector: 'app-tovar-window',
  templateUrl: './tovar-window.component.html',
  styleUrls: ['./tovar-window.component.scss']
})
export class TovarWindowComponent implements OnInit {
  @Input() public opened: boolean;
  @Output() public openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  changeOpened(val: boolean) {
    this.opened = val;
    this.openedChange.emit(this.opened);
  }

  @Input() public tovar: Tovar;

  public categories: Category[] = [];
  public errors = { Name: false, Cost: false, DateEnd: false, Categories: false };

  constructor(private categoryService: CategoriesPageService, private tovarService: TovarPageService) { }

  ngOnInit() {
    this.categories = this.categoryService.loadAllCategories();
  }

  close() {
    this.changeOpened(false);
  }

  submit() {
    this.errors = this.tovar.validate();
    if (this.tovar.isValid()) {
      if (this.tovar.ID) {
        this.tovarService.change(this.tovar);
      }
      else {
        this.tovar.ID = Tovar.generateID();
        this.tovarService.add(this.tovar);
      }
      this.close();
    }
    console.log(window.localStorage.getItem('Tovars'));
  }

}
