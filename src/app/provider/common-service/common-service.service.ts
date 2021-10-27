import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  constructor(private http: HttpClient) {}

  getInfo() {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://jsonplaceholder.typicode.com/todos')
        .subscribe((res) => {
          if (res) {
            resolve(res);
          }
        });
    });
  }

  getPosts() {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://jsonplaceholder.typicode.com/posts')
        .subscribe((res) => {
          if (res) {
            resolve(res);
          }
        });
    });
  }
  deletePostById(id: any) {
    return new Promise((resolve, reject) => {
      this.http
        .delete('https://jsonplaceholder.typicode.com/posts/' + id)
        .subscribe((res) => {
          if (res) {
            resolve(res);
          }
        });
    });
  }

  createPost(reqObj: any) {
    return new Promise((resolve) => {
      this.http
        .post<any>(
          'https://jsonplaceholder.typicode.com/posts',
          JSON.stringify(reqObj)
        )
        .subscribe((res) => {
          if (res) {
            resolve(res);
          }
        });
    });
  }
}
