import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Array<{}> {
    return [
        {
            name: 'femi',
            surname: 'bamidele'
        },
        {
            name: 'seun',
            surname: 'bamidele'
        }
    ];
  }
}
