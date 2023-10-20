import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'project';
  faUser = faUser;
}
