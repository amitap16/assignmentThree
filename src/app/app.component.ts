import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleDetails = true;
  log = [];

  onToggleDetails() {
    this.toggleDetails = !this.toggleDetails;
    this.log.push(new Date());
  }
}
