import { Component, OnInit } from '@angular/core';
import { UserService } from '../provider/user-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  list: any = [];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.userInformation();
  }
  userInformation() {
    this.service
      .userInfo()
      .then((res) => {
        this.list = res;
        console.log('response from api', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
}
