import { stringify } from '@angular/compiler/src/util';
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  color: string;
  constructor(private el: ElementRef<any>) {
  }
  @HostListener('window:keydown', ['$event']) handleKeyDown($event) {
    console.log($event.key);
    switch ($event.key) {
      case 'ArrowUp' :
        this.color = 'red';
        break;
      case 'ArrowDown' :
        this.color = 'green';
        break;
      case 'ArrowLeft' :
        this.color = 'blue';
        break;
      case 'ArrowRight' :
        this.color = 'pink';
        break;
      }
      this.el.nativeElement.style.color = this.color;
  }
}
