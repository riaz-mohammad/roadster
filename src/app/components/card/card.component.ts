import { Component, HostBinding, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  template: ``,
  styles: [
    `
      :host  {
        display: block;
        background: black;
        background-image: url('../../../assets/roadster.jpeg');
        background-size: cover;
        background-position: center;
      }
    `,
  ],
})
export class CardComponent {
  @HostBinding('style.height')
  @Input() height!: string;
}
