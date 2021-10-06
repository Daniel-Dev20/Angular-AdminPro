import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

//declare function  customInitFunction():any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'

})
export class PagesComponent implements OnInit {

  
  constructor(private service:SettingsService) { 

  }
  
  ngOnInit(): void {
    
    //customInitFunction();
    this.service.setTheme();

  }

}
