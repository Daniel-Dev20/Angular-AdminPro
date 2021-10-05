import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent {

  @Input('valor') progreso: number = 85;
  @Input() btnClass: string = 'btn btn-primary';


  @Output() valorSalida: EventEmitter<number> = new EventEmitter();


  cambiarValor = (valor: number) => {

    if (this.progreso >= 100 && valor >= 0) {

      this.valorSalida.emit(100);

      return this.progreso = 100;

    } else if (this.progreso <= 0 && valor < 0) {

      this.valorSalida.emit(0)
      return this.progreso = 0;
    }

    this.progreso += valor;
    return this.valorSalida.emit(this.progreso);
  }

  onChange = (nuevoValor: number) => {

    console.log("Cambio", nuevoValor);

    if (nuevoValor >= 100) {

      this.progreso = 100;

    } else if (nuevoValor <= 0) {

      this.progreso = 0;

    } else {

      this.progreso = nuevoValor
    }

    this.valorSalida.emit(this.progreso);
  }


}
