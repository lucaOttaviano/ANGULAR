import { Component } from '@angular/core';
import { users } from '../app/mock/array';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  vari: string = "";
  users: any = users;
  title = 'project1';
  name: HTMLElement = (document.getElementById('input') as HTMLInputElement);
  
  add (){
    console.log(this.name);
  }
}
