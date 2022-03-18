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
  id: number = 0;
  testF(){ // inserisce gli input di testo nell'array
      this.names[this.counter] = this.input; // inserisci nel names[counter] il valore dell'input di testo
      this.id = this.counter;
      this.counter++; // incrementa il counter
      console.log(this.id+1)
      this.test = false;
  }
  test: boolean = false;
  remove(){
    // this.names.splice(this.id, 1);
    // console.log(this.names[this.id]);
    this.test = true;
  }
}
