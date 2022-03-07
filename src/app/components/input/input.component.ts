import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input placeholder="EMAIL..."/>
  `,
  styles: [`
    :host {
      display: block;
      border-radius: 30px;
    }

    input {
      border-radius: inherit;
      padding-left: 30px;
      border: none;
      outline: none;
      display: block;
      height: 100%;
      width: 100%;
      font-weight: bold;
      background: inherit
    }
      
  `]
})
export class InputComponent {}
