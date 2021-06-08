import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsChanged = new Subject<Post[]>();

  private posts: Post[] = [
    new Post("That time when I bought a dog", "May 26, 2021", 5, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."),
    new Post("That time when I played pong", "May 25, 2021", 6, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."),
    new Post("That time when I parallel-parked wrong", "May 24, 2021", 7, "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.")
  ];

  constructor() { }

  getPost(id: number) {
    return this.posts[id];
  }

  getPosts() {
    return this.posts;
  }

  addPost(post: Post) {
    post.id = this.posts.length;
    this.posts.push(post);
    this.postsChanged.next(this.posts.slice());
  }

  updatePost(id: number, post: Post) {
    this.posts[id] = post;
    this.postsChanged.next(this.posts.slice());
  }

  deletePost(id: number) {
    this.posts.splice(id, 1);
    this.postsChanged.next(this.posts.slice());
  }
}
