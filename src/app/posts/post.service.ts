import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Page } from './page.model';
import { PostApiService } from './post-api.service';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsChanged = new Subject<Post[]>();
  error = new Subject<String>();
  page = new Subject<Page>();
  currentPage = new Subject<number>();
  totalPages = new Subject<number>();
  totalItems = new Subject<number>();

  private posts: Post[];

  constructor(private postApi: PostApiService) { }

  getPost(id: number) {
    return this.posts.find(post => post.id === id);
  }

  fetchPosts(index: number = 0, size: number = 5) {
    this.postApi.getAllPosts(index, size)
    .subscribe((data) => {
      this.posts = data.posts;
      this.page.next({currentPage: data.currentPage, totalItems: data.totalItems, totalPages: data.totalPages})
      this.currentPage.next(data.currentPage);
      this.totalPages.next(data.totalPages);
      this.totalItems.next(data.totalItems);
      console.log('inside subscribe', this.posts)
      this.postsChanged.next(this.posts)
    });
  }

  getPosts() {
    return this.posts;
  }

  addPost(post: Post) {
    this.postApi.addPost(post)
      .subscribe(responseData => {
      }, error => {
        console.log('error data', error.message);
        this.error.next(error.message);
      })
    this.postsChanged.next(this.posts.slice());
  }

  updatePost(id: number, post: Post) {
    this.postApi.updatePost(id, post)
      .subscribe(responseData => {
      }, error => {
        console.log("error data", error.message);
        this.error.next(error.message);
        this.fetchPosts();
      })
  }

  deletePost(id: number) {
    this.postApi.deletePost(id).subscribe(() => {
      this.fetchPosts();
    });
  }
}
