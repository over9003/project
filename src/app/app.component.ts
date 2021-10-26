import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showComponent = "recipes"
  title = 'project';
  
  chooseView(event: string){
    this.showComponent = event
  }
}
