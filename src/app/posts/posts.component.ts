import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../provider/common-service/common-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private service: CommonServiceService) {}

  ngOnInit(): void {}
  deletePost() {
    try {
      this.service.deletePostById(1).then((res: any) => {
        console.log('post delted', res);
      });
    } catch (err) {
      console.log('err', err);
    }
  }
  createPost() {
    try {
      const reqObj = {
        title: 'abc dvg cta',
        body: '123477776',
        userId: 1,
      };
      this.service.createPost(reqObj).then((res: any) => {
        console.log('post created', res);
        if (res) {
          this.service.getPosts().then((res) => {
            console.log('Created post', res);
          });
        }
      });
    } catch (err) {
      console.log('err', err);
    }
  }
}
