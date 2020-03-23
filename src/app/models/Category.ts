import { timer } from 'rxjs';

export class Category {
  ID: number;
  Name: string;
  private static count: number = 11;

  constructor(id?: number, name?: string) {
    if (!id) {
      return;
    }
    this.ID = id;
    if (!name) {
      return;
    }
    this.Name = name;
  }

  public static Add(name: string): Promise<Category> {
    const promise = new Promise<Category>((resolve, reject) => {
      timer(100).toPromise().then((data) => {   // не пишем для ошибочного запроса только потому что это таймер
        Category.count += 1;
        resolve(new Category(Category.count, name));
      },
        (reason) => {
          reject('Category add failed - ' + reason);
        }
      );
    });
    return promise;
  }

  public removeCategory(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      timer(100).toPromise().then((data) => {
        resolve(true);
      }, (reason) => {
        reject('Category - ' + name + ' - has not been deleted; ' + reason);
      });
    });
    return promise;
  };

  //public changeCategory(): Promise<Category> {
  //  const promise = new Promise<Category>((resolve, reject) => {

  //  })
  //}

  //public getCategory(id: number): Promise<Category> {
  //  const promise = new Promise<Category>((resolve, reject) => {
  //    timer(100).toPromise().then((data) => {
  //      window.localStorage.getItem('Category_' + id.toString());
  //    })
  //  })
  //}

}
