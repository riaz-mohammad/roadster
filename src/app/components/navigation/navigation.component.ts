import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
     :host {
       display: flex;
       height: 8vh;
       width: 100%;
       align-items: center;
       justify-content: space-between;
       padding-inline: 100px;
     }
  `]
})
export class NavigationComponent {}
