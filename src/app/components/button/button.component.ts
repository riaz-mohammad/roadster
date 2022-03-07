import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
     :host {
       color: white;
       border-radius: 30px;
       font-size: 16px;
       box-sizing: border-box;
       width: 100px;
       height: 30px;
       background: black;

     }

    button {
      box-sizing: border-box;
      font-weight: inherit;
      font-size: inherit;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      color: inherit;
      border: none;
      outline: none;
      background: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      
    }  
  `]
})
export class ButtonComponent {}
