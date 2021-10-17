import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Creacion de los campos y campos requeridos del formulario
  public loginForm = this.formBuilder.group({

    email: [localStorage.getItem('email'), Validators.required],
    password:["1234567", [Validators.required, Validators.minLength(6)]],
    remember: [false, Validators.required]
   

  })
  constructor(

    private router:Router,
    private formBuilder:FormBuilder,
    private authService:AuthService

    ) { 


  }

  ngOnInit(): void {
  }

  //Funcion para loguear usuario
  login = () => {

    //this.router.navigateByUrl('/');

    this.authService.login(this.loginForm.value).subscribe(resp => {

      console.log(resp);

     // if(this.loginForm.get('remember').value){

        //localStorage.setItem('email', this.loginForm.get('email').value);

     // }else{

        //localStorage.removeItem('email')
     // }
     this.router.navigateByUrl('/')
    }, (err) => {

      Swal.fire('Error', err.error.msg, 'error')
    })

  }

}
