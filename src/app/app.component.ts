import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  input: string = ""; //inizializza la variabile input che corrisponde all'input di testo
  names: string[] = []; // inizializzo l'array in cui si andranno ad inserire gli input
  counter: number = 0;
  testF(){
      this.names[this.counter] = this.input; // inserisci nel names[counter] il valore dell'input di testo
      this.counter++; // incrementa il counter
  }
}
