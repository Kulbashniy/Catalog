import { Category } from './Category';

export class Tovar {
  ID: number;
  Name: string;
  Cost: number;
  DateEnd: Date;
  Categories: Category[];     // товар может находится в нескольких категориях одновременно (Наушники->Вкладыши)

  private static count: number = 1;

  constructor(json?) {
    if (!json) {
      return;
    }
    this.ID = json.ID;
    this.Name = json.Name;
    this.Cost = json.Cost;
    this.DateEnd = json.DateEnd;
    this.Categories = json.Categories;
  }

  public static generateID(): number {
    Tovar.count+=1;
    return Tovar.count;
  }

  public validate(): any {
    let result = { Name: false, Cost: false, DateEnd: false, Categories: false };
    if ((this.Name.length < 5) || (this.Name.length > 40)) {
      result.Name = true;
    }
    if (this.Cost <= 0) {
      result.Cost = true;
    }
    if (this.DateEnd <= new Date()) {
      result.DateEnd = true;
    }
    if (this.Categories.length == 0) {
      result.Categories = true;
    }
    return result;
  }

  isValid(): boolean {
    let errors = this.validate();
    if (errors.Name) {
      return false;
    }
    if (errors.Cost) {
      return false;
    }
    if (errors.DateEnd) {
      return false;
    }
    if (errors.Categories) {
      return false;
    }

    return true;
  }
}
