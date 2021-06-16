import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageEvent: PageEvent;
  
  length: number = 5;
  pageSize: number = 5;
  pageIndex: number;

  constructor(private postService: PostService) { }

  public getServerData(event?: PageEvent) {
    this.postService.fetchPosts(event.pageIndex, event.pageSize);
    return event;
  }

  ngOnInit(): void {
    this.postService.postsChanged.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.postService.fetchPosts();
    this.postService.page.subscribe(page => {
      this.length = page.totalItems;
    })
  }

}
