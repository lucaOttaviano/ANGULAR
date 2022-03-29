import { Component, OnInit } from '@angular/core';
import { Users } from '../interfaces/users'; // importazione dell'interfaccia 
import { ExchangeService } from '../services/exchange.service'; // importazione del servizio

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  array: Users[] = this.exchangeService.array; // richiamo l'array del servizio 

  constructor(private exchangeService: ExchangeService) { } // iniezione del servizio

  ngOnInit(): void {
  }

}
