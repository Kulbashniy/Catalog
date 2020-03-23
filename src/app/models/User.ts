export class User {
  DisplayName: string = 'Гость';
  Authorized: boolean = false;
  IsAdmin: boolean = false;

  constructor(name?: string, role?: string) {
    if (!name) {
      return;
    }
    this.DisplayName = name;
    this.Authorized = true;
    if (!role) {
      return;
    }
    switch (role) {
      case 'ADMIN':
        this.IsAdmin = true;
        break;
      case 'USER':
        this.IsAdmin = false;
        break;
    }
  }
}
