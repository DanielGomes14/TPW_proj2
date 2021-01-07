export class User {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_superuser: boolean;

  constructor(username: string, first_name: string, last_name: string, email: string) {
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.is_superuser = true;
  }
}
