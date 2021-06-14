import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PostApiService } from './post-api.service';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsChanged = new Subject<Post[]>();
  error = new Subject<String>();

  private posts: Post[] = [
    // new Post("That time when I bought a dog", "May 26, 2021", 5, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."),
    // new Post("That time when I played pong", "May 25, 2021", 6, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."),
    // new Post("That time when I parallel-parked wrong", "May 24, 2021", 7, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.")
  ];

  constructor(private postApi: PostApiService) { }

  getPost(id: number) {
    return this.posts.find(post => post.id === id);
  }

  fetchPosts() {
    this.postApi.getAllPosts()
    .subscribe((data: Post[]) => {
      this.posts = data
      console.log('inside subscribe', this.posts)
      this.postsChanged.next(this.posts)
    });
  }

  getPosts() {
    return this.posts;
  }

  addPost(post: Post) {
    // post.id = this.posts.length;
    // this.posts.push(post);
    this.postApi.addPost(post)
      .subscribe(responseData => {
      }, error => {
        console.log('error data', error.message);
        this.error.next(error.message);
      })
    this.postsChanged.next(this.posts.slice());
  }

  updatePost(id: number, post: Post) {
    // this.posts[id] = post;
    this.postApi.updatePost(id, post)
      .subscribe(responseData => {
      }, error => {
        console.log("error data", error.message);
        this.error.next(error.message);
      })
    this.fetchPosts();
  }

  deletePost(id: number) {
    // this.posts.splice(id, 1);
    this.postApi.deletePost(id).subscribe();
    // this.postsChanged.next(this.posts.slice());
    this.fetchPosts();
  }
}
