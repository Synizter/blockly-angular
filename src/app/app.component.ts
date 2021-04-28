import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siit-blockly';
  content:JSON;
  displayWorkspace: boolean = false;
  
  public receiveCodeEvent(code) {
    try{
      this.content = JSON.parse(code);
    } catch(e) {
      alert('Invalid json format!')
      this.displayWorkspace = false;
    }
  }

  public DisplayBlocklyWorkspace(isDisplay) {
    this.displayWorkspace = isDisplay;
  }
}
