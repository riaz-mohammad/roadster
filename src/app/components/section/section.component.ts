import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50vh;
      background: black;
      overflow: hidden;
      position: relative;
      z-index: 1;
    }
  `]
})
export class SectionComponent {}
