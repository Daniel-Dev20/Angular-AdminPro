import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  private  colorlink = document.querySelector('#theme');
  
  constructor() { 

    console.log('SERVICIO SETTINGS INIT ');
  }

  setTheme = () => {

    const url:any = localStorage.getItem('theme') || './assets/css/colors/red.css';
    
    this.colorlink?.setAttribute('href', url);
    
    
    localStorage.setItem('theme', url);
  }

  changeTheme = (theme:string) => {

    const url:string = `./assets/css/colors/${theme}.css`

    this.colorlink?.setAttribute('href', url);

    localStorage.setItem('theme', url);


  }
}
