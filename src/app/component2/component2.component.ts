import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service'; // importazione del servizio

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  

  constructor(private exchangeService: ExchangeService) { } // iniezione del servizio

  ngOnInit(): void {
  }

}
