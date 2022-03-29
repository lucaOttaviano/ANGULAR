import { Injectable } from '@angular/core';
  import { Users } from '../interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  array: Users[] = []; // inizializza la variabile contenitore 
  selectedUsers?: Users;

  addUser(input: Users){
    this.array.push(input); // inserisce l'input nell'array 
  }

  editUser(input: Users){
    this.selectedUsers = input;
  }

  constructor() { }
}
