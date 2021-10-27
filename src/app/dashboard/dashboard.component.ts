import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  remove() {
    alert('Are you sure you want to logout?');
    localStorage.removeItem('x-auth');
    localStorage.removeItem('userInfo');
    this.router.navigateByUrl('/login');
  }
}
