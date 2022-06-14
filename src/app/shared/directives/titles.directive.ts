import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitles]'
})
export class TitlesDirective {

  constructor(
    private element: ElementRef
  ) {
    element.nativeElement.style.fontSize = '40px';
    element.nativeElement.style.fontStyle = 'normal';
  
  }

}
