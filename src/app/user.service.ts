import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public sayHello(): void {

    console.log('Hello from UserService');
  }

  constructor() { }
}
