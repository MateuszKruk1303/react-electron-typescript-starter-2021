export class Auth {
  static root = '/auth'
  static login = `${this.root}/login`
  static register = `${this.root}/register`
}

export class Users {
  static root = '/users'
  static me = `${this.root}/me`
}
