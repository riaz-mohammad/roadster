import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
     <ng-content></ng-content>
  `,
  styles: [`
    :host {
      color: white;
      height: 100vh;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
      transform-style: preserve-3d;
    }
    :host::after{
      content: '';
      position: absolute;
      inset: 0;
      background-image: url('../../../assets/background.jpeg');
      background-size: cover;
      z-index: -1;
      transform: translateZ(-10px) scale(2) ;
    }
  `]
})
export class HeaderComponent {}
