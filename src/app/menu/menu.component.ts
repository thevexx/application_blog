import { Component, OnInit } from '@angular/core';
import { Router,  NavigationStart } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('usertoken') ? true : false;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoggedIn = localStorage.getItem('usertoken') ? true : false;
      }
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
    this.isLoggedIn = localStorage.getItem('usertoken') ? true : false;
  }
}
