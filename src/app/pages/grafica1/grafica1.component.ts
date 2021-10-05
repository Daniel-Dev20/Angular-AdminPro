import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component  {

  public labels1:string[] = ['Tacos', 'Pupusas', 'Soda'];


  public data1 = [ [20, 100, 120] ];

}
