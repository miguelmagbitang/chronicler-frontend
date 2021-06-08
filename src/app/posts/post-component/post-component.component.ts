import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Post } from '../post.model';
import { PostContainerComponent } from '../post-container/post-container.component';
import { PostService } from '../post.service';



@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  @Input() post!: Post;
  @Input() id: number;

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigate([id], {relativeTo: this.route})
  }

  editPost(id: number): void {
    console.log('id', id);
    this.router.navigate([id, 'edit'], {relativeTo: this.route})
  }

  deletePost(id: number): void {
    this.postService.deletePost(id);
  }

}
