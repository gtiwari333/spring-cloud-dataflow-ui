import {Directive, Input, OnInit, ElementRef, AfterViewInit, AfterContentInit} from '@angular/core';
import tippy, {Props, Content, Instance} from 'tippy.js';

@Directive({
  /* tslint:disable-next-line */
  selector: '[tippy]'
})
export class TippyDirective implements OnInit {

  private instance;

  @Input('tippyOptions') public tippyOptions: Props;

  @Input('content')
  set content(c: Content) {
    if (this.instance) {
      this.instance.setContent(c);
    }
  }

  constructor(private el: ElementRef) {
    this.el = el;
  }

  public ngOnInit() {
    this.instance = tippy(this.el.nativeElement, this.tippyOptions || {});
  }
}
