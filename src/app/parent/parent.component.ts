import { Component, OnInit } from '@angular/core';
import { UserService } from '../provider/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  list: any = [];

  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userInformation();
  }
  userInformation() {
    this.service
      .userInfo()
      .then((res) => {
        this.list = res;
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  logoutParent(event: any) {
    console.log('logout child call', event);
    if (event) {
      localStorage.removeItem('x-auth');
      localStorage.removeItem('userInfo');
      this.router.navigateByUrl('/login');
    }
  }
}
