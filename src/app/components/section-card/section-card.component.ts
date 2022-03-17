import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { image } from '../../animations';

@Component({
  selector: 'app-section-card',
  template: `
    <image-container [style.order]="order">
      <img
        src="../../../assets/moon.png"
        [style.transform]="turnImage"
        class="first_image"
      />
      <img
        src="../../../assets/car.png"
        [style.transform]="turnImage"
        class="second_image"
      />
    </image-container>
    <h4>
      Hello world amazing thing happens in the space. Fantasy is a dream.Fantasy
      is a dream with open eyes. Hello world amazing thing happens in the space.
      Hello world. Fantasy is a dream with open eyes. hello world Fantasy is a
      dream with open eyes.Hello world amazing thing happens in the space.Hello
      world. Fantasy is a dream with open eyes. Fantasy is a dream with open
      eyes. Fantasy is a dream with open eyes.Fantasy is a dream with open eyes.
    </h4>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 60%;
        height: 70%;
        color: white;
      }
      image-container {
        width: 30%;
        height: 100%;
        position: relative;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        left: 0;
        top: 0;
        position: absolute;
      }

    h4 {
        width: 55%;
      }
    `,
  ],
  animations: [image],
})
export class SectionCardComponent {
  @Input() flip!: number;
  @Input() order!: number;

  get turnImage(): string {
    return `scaleX(${this.flip})`;
  }

  @HostBinding('style.background-image')
  get color(): string {
    return this.order
      ? `
          linear-gradient(to left, 
          hsl(255deg 67% 10%),
          hsl(255deg 67% 10%),
          hsl(309deg 68% 24%))`
      : `
          linear-gradient(to right, 
          hsl(255deg 67% 10%),
          hsl(255deg 67% 10%),
          hsl(309deg 68% 24%))
          `;
  }
}
