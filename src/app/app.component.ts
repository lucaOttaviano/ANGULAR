// assegna un id ad ogni elemento ed al click di ogni bottone elimina la riga in cui esso è contenuto

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  input: string = ""; //inizializza la variabile input che corrisponde all'input di testo
  names: string[] = []; // inizializzo l'array in cui si andranno ad inserire gli input
  counter: number = 0; // inizializzo il counter a 0
  test: boolean = false;
  testF(){ // inserisce gli input di testo nell'array
      this.names[this.counter] = this.input; // inserisci nel in ogni elemento di names il valore dell'input di testo
      this.counter++; // incrementa il counter
  }
  remove(name: string){
    this.names = this.names.filter(x=>x!=name);
  }
}


