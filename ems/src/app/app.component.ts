import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uname: string = "";
  pwd: string = "";
  statusMessage: string = "";

  constructor() {
    
    console.log("At the creation  time angular will inject the service")
  }

  loginValidation() {
    if (this.uname=="admin" && this.pwd=="admin123") {
      this.statusMessage = "SUCESSFULLY LOGIN";
    } else {
      this.statusMessage = "INVALID USERNAME AND PASSWORD";
    }
  }
}