import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service'; // importazione del servizio
import { Users } from '../interfaces/users'; // importazione dell'interfaccia
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  user: Users = { // inizializzo l'interfaccia del service 
    firstname: "",
    lastname: "",
    id: 0 
  }
  test(){
    this.exchangeService.addUser(this.user) // con gli [(ngModel)] nell'html si inseriscono i valori dell'interfaccia user, con this.user la si richiama e la si inserisce come parametro della funzione addUser del servizio
    this.user = {
      firstname: "",
      lastname: "",
      id: 0 
    }
  }

  constructor(private exchangeService: ExchangeService) { } // iniezione del servizio

  ngOnInit(): void {
  }

}
