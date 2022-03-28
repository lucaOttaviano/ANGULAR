// assegna un id ad ogni elemento ed al click di ogni bottone elimina la riga in cui esso è contenuto

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  input: string = ""; //inizializza la variabile input che corrisponde all'input di testo
  names: Interfaccia[] = []; // inizializzo l'array in cui si andranno ad inserire gli input
  counter: number = 0; // inizializzo il counter a 0
  id: number = 0; 
  test: boolean = false;
  testF(){ // inserisce gli input di testo nell'array
      this.id = this.names.length; 
      this.names.push({id: this.id, name: this.input});
  }
  remove(item: Interfaccia){
    this.names = this.names.filter(x => x.id != item.id);
  }
}

interface Interfaccia {
  id: number;
  name: string; 
}


