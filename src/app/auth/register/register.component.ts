import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public formSubmitted = false;

  //Creacion de campos del formulario y campos requeridos
  public registerForm = this.formBuilder.group({

    nombre:["", [Validators.required, Validators.minLength(3)]],
    email: ["test1@gmail.com", Validators.required],
    password:["1234567", [Validators.required, Validators.minLength(6)]],
    password2:["1234567", Validators.required],
    terminos:[false, Validators.required]

  })

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
    
    ) { }


  //Funcion para guardar usuarios
  saveUsuario = () => {

    this.formSubmitted = true;

    console.log(this.registerForm.value);

    //Validacion del formulario para el posteo de informacion
    if(this.registerForm.invalid){

     return;

    }

    //enviamos la informacion del formulario al servicio para ser guardada en la BD
    this.authService.saveUser(this.registerForm.value).subscribe(resp => {

      console.log(resp);
      Swal.fire('success', 'Usuario registrado', 'success')

      this.router.navigateByUrl('/')

    }, (err) => {

      Swal.fire('Error', err.error.msg, 'error')

    })
  }


  //Funcion para validar los campos del formulario y mostrar errores
  campoNoValido(campo:string):boolean{

    if(this.registerForm.get(`${campo}`)?.invalid && this.formSubmitted){

      return true;
    }else{

      return false;
    }

  }

  //Funcion para validar el checbox de terminos

  aceptaTerminos(){

    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  //Funcion para validar los passwords y si son iguales
  passwordNoValido(){

    const password = this.registerForm.get('password')?.value;
    const password2 = this.registerForm.get('password2')?.value;

    if( (password !== password2) && this.formSubmitted){

      return true;
    }else{

      return false;
    }
  }
 

}
