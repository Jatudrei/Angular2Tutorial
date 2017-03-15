import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
      
    </fa-lifecycle>
    <p *ngIf = "delete">butterflies chow death</p>
    <button (click)="delete=true" *ngIf="!delete">Delete</button>
    <button (click)="test='buggy with buddy bap!'" (click)="delete=false">Something else</button>
    <button (click)="boundValue=2000">Change Binding</button>
    `,

})

export class AppComponent {
  title = 'app doesn\'t works, but ducks work very hard!';
  delete = false;
  test="garfield likes lasagna";
  boundValue="1000";
}
