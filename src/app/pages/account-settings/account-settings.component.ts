import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public  colorLink = document.querySelector('#theme');

  constructor(private settingsService:SettingsService) { }

  ngOnInit(): void {

    this.checkCurrentTheme()
  }

  changeTheme = (theme:string) => {

  
    this.settingsService.changeTheme(theme);
    this.checkCurrentTheme();


  }
  checkCurrentTheme = () => {


    const links = document.querySelectorAll('.selector');

    links.forEach(link => {

        link.classList.remove('working');
        
        const btnTheme      = document.querySelector('data-theme');
        const btnThemeUrl   = `./assets/css/colors/${btnTheme}.css`;
        const currentTheme  = this.colorLink?.getAttribute('href');

        if(btnThemeUrl === currentTheme){

        }
    })


  }

}
