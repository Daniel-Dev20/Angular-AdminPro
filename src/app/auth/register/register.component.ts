import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.formBuilder.group({

    nombre:["", [Validators.required, Validators.minLength(3)]],
    email: ["test1@gmail.com", Validators.required],
    password:["1234567", [Validators.required, Validators.minLength(6)]],
    password2:["123456", Validators.required],
    terminos:[false, Validators.required]

  })

  constructor(private formBuilder:FormBuilder) { }


  saveUsuario = () => {

    this.formSubmitted = true;

    console.log(this.registerForm.value);

    if(this.registerForm.valid){

      console.log('posteando formulario');
    }else{

      console.log('error el posteo de formulario')
    }
  }


  campoNoValido(campo:string):boolean{

    if(this.registerForm.get(`${campo}`)?.invalid && this.formSubmitted){

      return true;
    }else{

      return false;
    }

  }

  aceptaTerminos(){

    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

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
