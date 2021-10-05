import { Component, Input, Output, EventEmitter} from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent  {

  @Input() titulo:string = 'sin titulo';
  @Input('label') doughnutChartLabels:Label[] = ['label1', 'label2', 'label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    
    [350, 450, 100]
  ];

  public colors:Color[] = [
    {backgroundColor: ['#F0A500', '#212121', '#90AACB']}
  ];
  
}
