import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroForm } from '../interfaces/registro.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login.interface';
import {tap, map, catchError} from "rxjs/operators"
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.models';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
   usuario:any;

  public base_url =environment.base_url;
  constructor(private http:HttpClient) { }

  //Funcion para verificar token y proteger rutas
  verificarToken = ():Observable<boolean> => {

    const token = localStorage.getItem('token') || '';

    return this.http.get(`${this.base_url}/login/renew`, {

      headers: {
        'x-token':token
      }
    }).pipe(
      
        tap( (resp:any) => {

        
          const {email, google, nombre, role,img, uid} = resp.usuario;

          this.usuario = new Usuario(nombre, email, '', img, role,google);

          localStorage.setItem('token', resp.token);

        }),

        map(resp => true),
        catchError(error => of(false))
    )
   
  }

  //Funcion para guardar usuarios a la BD
  saveUser = (formData:RegistroForm) => {

    return this.http.post(`${this.base_url}/usuarios`, formData)
                    .pipe(

                      tap( (resp:any) =>{

                          localStorage.setItem('token', resp.token)
                      })
                    )
    
  }

  //Funcion para hacer login a la BD
  login = (formData:LoginForm) => {

    return this.http.post(`${this.base_url}/login`, formData)
                    .pipe(

                      tap((resp:any) => {

                          localStorage.setItem('token', resp.token)
                      })
                    )
  }
 }
