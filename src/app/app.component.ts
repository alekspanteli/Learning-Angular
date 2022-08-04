import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  template: `
  <h1>Artist directory</h1>
  <p>Hello</p>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
