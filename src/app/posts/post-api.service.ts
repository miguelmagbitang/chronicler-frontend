import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/api/post';

  getPost() {
    return this.http.get<Post>(this.url+"/8")
  }

  getAllPosts() {
    return this.http.get<Post[]>(this.url);
  }

  addPost(post: Post) {
    console.log("addPost api")
    return this.http.post<Post>(this.url, post, { observe: 'response'});
  }

  updatePost(id: number, post: Post) {
    return this.http.put<Post>(this.url+"/"+id, post, { observe: 'response'});
  }

  deletePost(id: number) {
    return this.http.delete(this.url+"/"+id);
  }
}
