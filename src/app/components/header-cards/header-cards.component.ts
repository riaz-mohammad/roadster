import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-cards',
  template: `
      <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 20px;
        width: 100%;
        height: 50%;
        overflow: hidden;
      }
    `,
  ],
})
export class HeaderCardsComponent {}
