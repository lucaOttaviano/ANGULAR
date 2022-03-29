import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service'; // importazione del servizio

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  input: string = ""; // inizializzo la variabile di riferimento dell'[(ngModel)]

  test(){
    this.exchangeService.var = this.input; //richiama la variabile contenitore del servizio e la valorizza
  }

  constructor(private exchangeService: ExchangeService) { } // iniezione del servizio

  ngOnInit(): void {
  }

}
