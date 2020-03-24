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
    // симулируем таймером задержку при создании категории (запрос ожидаем)
    const promise = new Promise<Category>((resolve, reject) => {
      timer(100).toPromise().then((data) => {
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

}
