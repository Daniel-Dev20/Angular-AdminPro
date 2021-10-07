import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {retry} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    this.returnObservable().pipe(

      retry()

    ).subscribe( 

        valor =>  console.log('subs:', valor),
        error => console.warn('error:', error),
        ()    => console.log("obs terminado")

    );
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
