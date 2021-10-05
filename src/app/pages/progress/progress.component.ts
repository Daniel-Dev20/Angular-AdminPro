import { ThrowStmt } from '@angular/compiler';
import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent{

 
  progreso:number = 25;

  get getPorcentaje(){

    return `${this.progreso}%`;
  }

  cambioValorHijo = (valor:number) => {


    this.progreso = valor;
  }

}
