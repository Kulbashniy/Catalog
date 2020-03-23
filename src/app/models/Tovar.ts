import { Category } from './Category';

export class Tovar {
  ID: number;
  Name: string;
  Categories: number[];     // товар может находится в нескольких категориях одновременно (Наушники->Вкладыши)

  constructor(json?) {
    if (!json) {
      return;
    }
    this.ID = json.ID;
    this.Name = json.Name;
    this.Categories = json.Categories;
  }
}
