import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermano]'
})
export class EstiloHermanoDirective {

  constructor(private element: ElementRef) {

   // this.element.nativeElement.style.backgroundColor = 'red';
   this.element.nativeElement.style.textTransform = 'capitalize';
   }

}
