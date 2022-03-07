import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 50%;
      height: 40%;
      position: relative;
      gap: 60px;
      top: 25px;
    }
  `]
})
export class FormComponent {}