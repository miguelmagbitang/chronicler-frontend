import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.postsChanged.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        console.log('posts subscription', this.posts);
      }
    )
    this.posts = this.postService.getPosts();
    console.log('posts get', this.posts);
  }

}
