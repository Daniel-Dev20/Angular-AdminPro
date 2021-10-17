import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// declare function customSidebar():any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

    // customSidebar();
  }

  logout = () => {

    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

}
