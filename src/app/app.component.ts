import { Component } from '@angular/core';
import { card, animateCard, input } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [card, animateCard, input],
})
export class AppComponent {
  title = 'roadster';
}
