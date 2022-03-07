import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appObserver]'
})
export class ObserverDirective {
  private _animate = false;
  @Input() appObserver!: string;

  @HostBinding('@animateCard')
  get animate(): any {
    return {
      value: this._animate,
      params: {translate: this.appObserver}
    }  
  }
    

  constructor(private element: ElementRef<HTMLElement>) { }

  ngOnInit() {
    let observer!: IntersectionObserver;
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this._animate = true;
        observer.unobserve(this.element.nativeElement);
      }
    },
      {
        rootMargin: '0px',
        threshold: [0.8]
      }
    );
    observer.observe(this.element.nativeElement);
  }

}
