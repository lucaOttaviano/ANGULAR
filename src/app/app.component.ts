import { Component } from '@angular/core';
import { users } from '../app/mock/array';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  users: any = users;
  title = 'project1';
}
