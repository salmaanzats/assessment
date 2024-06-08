import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[matificMarkColor]'
})

export class MarkColorDirective implements OnChanges {

  @Input() matificMarkColor: number;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.matificMarkColor) {
      this.updateColor();
    }
  }

  private updateColor() {
    const mark = this.matificMarkColor;
    let color = 'black';

    if (mark >= 90 && mark <= 100) {
      color = 'green';
    } else if (mark >= 80 && mark <= 90) {
      color = '#d5d552';
    } else if (mark >= 60 && mark <= 80) {
      color = 'orange';
    } else {
      color = 'red'
    }

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
