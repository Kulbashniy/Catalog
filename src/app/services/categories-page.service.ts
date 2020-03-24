import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesPageService {

  public categories$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(null);

  constructor() { }

  public addCategory(data: Category) {
    console.log(data);
    const allCategories = window.localStorage.getItem('Categories');
    window.localStorage.removeItem('Categories');
    let result: Category[] = [];
    if (allCategories) {
      let parsed = JSON.parse(allCategories);
      parsed.forEach((category) => {
        result.push(new Category(category.ID, category.Name));
      });
    }
    result.push(data);
    let json = JSON.stringify(result);
    window.localStorage.setItem('Categories', json);
    this.categories$.next(result);
  }

  public changeCategory(data: Category) {
    const allCategories = window.localStorage.getItem('Categories');
    let result: Category[] = [];
    let parsed = JSON.parse(allCategories);
    parsed.forEach((category) => {
      if (category.ID == data.ID) {
        result.push(data);
      }
      else {
        result.push(new Category(category.ID, category.Name));
      }
    });

    let json = JSON.stringify(result);
    window.localStorage.setItem('Categories', json);
    this.categories$.next(result);
  }

  public removeCategory(data: Category) {
    const allCategories = window.localStorage.getItem('Categories');
    let result: Category[] = [];
    let parsed = JSON.parse(allCategories);
    parsed.forEach((category) => {
      if (category.ID == data.ID) {
        return;
      }
      else {
        result.push(new Category(category.ID, category.Name));
      }
    });

    let json = JSON.stringify(result);
    window.localStorage.setItem('Categories', json);
    this.categories$.next(result);
  }

  public getCategory(id: number): Category {
    const allCategories = window.localStorage.getItem('Categories');
    let result: Category;
    let parsed = JSON.parse(allCategories);
    const finded = parsed.map((val) => {
      if (val.ID == id) {
        return true;
      }
      else {
        return false;
      }
    });
    result = new Category(finded[0].ID, finded[0].Name);
    return result;
  }

  public getAllCategories() {
    const allCategories = window.localStorage.getItem('Categories');
    let result: Category[];
    let parsed = JSON.parse(allCategories);
    if (parsed) {
      result = parsed.map((category) => { return new Category(category.ID, category.Name); });
      this.categories$.next(result);
    }
  }

  public loadAllCategories(): Category[] {
    const allCategories = window.localStorage.getItem('Categories');
    let result: Category[];
    let parsed = JSON.parse(allCategories);
    if (parsed) {
      result = parsed.map((category) => { return new Category(category.ID, category.Name); });
      return result;
    }
    else {
      return [];
    }
  }
}
