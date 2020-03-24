import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tovar } from '../models/Tovar';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class TovarPageService {

  public tovars$: BehaviorSubject<Tovar[]> = new BehaviorSubject<Tovar[]>(null);

  constructor() { }

  add(data: Tovar) {
    let result: Tovar[] = [];
    const tovars = JSON.parse(window.localStorage.getItem('Tovars'));
    if (tovars) {
      tovars.forEach((tovar) => {
        result.push(new Tovar(tovar));
      })
    }
    result.push(data);
    window.localStorage.setItem('Tovars', JSON.stringify(result));
    this.tovars$.next(result);
  }

  remove(data: Tovar) {
    let result: Tovar[] = [];
    const tovars = JSON.parse(window.localStorage.getItem('Tovars'));
    if (tovars) {
      tovars.forEach((tovar) => {
        if (tovar.ID != data.ID) {
          result.push(new Tovar(tovar));
        }
      })
    }
    window.localStorage.setItem('Tovars', JSON.stringify(result));
    this.tovars$.next(result);
  }

  change(data: Tovar) {
    let result: Tovar[] = [];
    const tovars = JSON.parse(window.localStorage.getItem('Tovars'));
    if (tovars) {
      tovars.forEach((tovar) => {
        if (tovar.ID == data.ID) {
          result.push(data);
        }
        else {
          result.push(new Tovar(tovar));
        }
      })
    }
    window.localStorage.setItem('Tovars', JSON.stringify(result));
    this.tovars$.next(result);
  }

  getbyid(id: number) {
    let result: Tovar;
    const tovars = JSON.parse(window.localStorage.getItem('Tovars'));
    if (tovars) {
      tovars.forEach((tovar) => {
        if (tovar.ID == id) {
          result = new Tovar(tovar);
        }
      })
    }
    return result;
  }

  getall(): Tovar[] {
    const allTovars = window.localStorage.getItem('Tovars');
    let result: Tovar[];
    let parsed = JSON.parse(allTovars);
    if (parsed) {
      result = parsed.map((tovar) => { return new Tovar(tovar); });
      return result;
    }
    else {
      return [];
    }
    
  }

  loadall() {
    const allTovars = window.localStorage.getItem('Tovars');
    let result: Tovar[];
    let parsed = JSON.parse(allTovars);
    if (parsed) {
      result = parsed.map((tovar) => { return new Tovar(tovar); });
      this.tovars$.next(result);
    }
  }

  hasCategory(category: Category): boolean {
    let result: boolean = false;
    const allTovars = this.getall();
    allTovars.forEach((tovar) => {
      if (tovar.Categories.map((cat) => { return cat.ID }).includes(category.ID)) {
        result = true;
      }
    })
    return result;
  }

  getTovarsByCategoryID(id: number): Tovar[] {
    const tovars = this.getall();
    const result: Tovar[] = tovars.filter((tovar) => { return tovar.Categories.map((cat) => { return cat.ID }).includes(id) });
    return result;
  }
}
