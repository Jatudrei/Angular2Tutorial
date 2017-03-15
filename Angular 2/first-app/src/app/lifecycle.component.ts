import { Component,
   OnInit,
    OnChanges,
     DoCheck,
      AfterContentInit,
       AfterContentChecked,
        AfterViewInit,
         AfterViewChecked,
          OnDestroy,
            Input } from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
   <ng-content></ng-content>
   <hr><p #boundParagraph>{{bindable}}</p>
   <p>{{boundParagraph.textContent}}</p>
  `,                     
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable=1000;

  constructor() { }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('DoCheck');
  }

  ngAfterContentInit() {
    this.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('AfterContentChecked');
  }

  ngAfterViewInit(){
    this.log('AfterViewInit');
  }

  ngAfterViewChecked(){
    this.log('AfterViewChecked');
  }

  ngOnDestroy(){
    this.log('OnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}




