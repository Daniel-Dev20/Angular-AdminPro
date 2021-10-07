import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    this.getUsuarios().then( usuarios => console.log(usuarios));
  //   const promesa = new Promise( (resolve, reject) => {

  //     if(false){
        
  //       resolve('inicio de promesa')
  //     }else{

  //       reject('Algo salio mal')
  //     }
  //   })

  //   promesa.then( (mensaje) => {

  //     console.log(mensaje)
  //   }).catch( (err) => console.log('error en promesa:', err))

  //   console.log('Fin de la promesa')
  // }
  }

  getUsuarios = () => {

    const promesa = new Promise( (resolve) => {

      fetch('https://reqres.in/api/users?page=2')
      .then(resp => resp.json())
      .then(body =>  resolve(body.data));
      
    })


    return promesa;
  }
}
