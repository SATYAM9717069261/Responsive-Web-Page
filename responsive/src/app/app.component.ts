import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'responsive';
  login:string="none";
  showlogin(){
    console.log('display');
    this.login="block";
  }
  close(){
    this.login="none";
  }
}
