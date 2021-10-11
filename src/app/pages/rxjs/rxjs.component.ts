import { Component, OnInit } from '@angular/core';
import { Observable,interval} from 'rxjs';
import {retry, take, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    // this.returnObservable().pipe(

    //   retry()

    // ).subscribe( 

    //     valor =>  console.log('subs:', valor),
    //     error => console.warn('error:', error),
    //     ()    => console.log("obs terminado")

    // );

    this.returnIntervalo()
        .pipe(

          map(valor => {
            
            
            return valor;
          }),
          filter(valor => (valor % 2 === 0 ) ? true : false),
          take(10)
        )
        .subscribe( 

          valor  => console.log(valor)
        )
  }


  returnIntervalo = ():Observable<number> => {

    const intervalo$ = interval(500);

    return intervalo$;
  }


  returnObservable = ():Observable<number> => {

    let i = -1;

    const obs$ = new Observable<number>(observer  => {


        const intervalo = setInterval(() => {

          i++;

          observer.next(i);

          if(i === 5){

            clearInterval(intervalo);

            observer.complete();
          }

          if(i === 3){

            observer.error('i llego a 3');
          }
            
        }, 1000)
    })

    return obs$;


  }

}
