import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is string interpolation.';
  numberInterpolation = 2;
  truthinessInterpolation = true;
  falsinessInterpolation = false;
  arrayInterpolation = [1, 2, 3, 4, 5, 6];
  objectInterpolation = {"dog": "King",
                         "cat": "Flash",
                          "bird": "Aravah"}
  onClicked(value: string) {
    alert(value);
  }                        
  
}
