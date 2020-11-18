import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day03wkshop';

  tasks = [];

  addTask($event) {
    this.tasks.push($event)
    console.log(typeof $event.due)
  }
}
