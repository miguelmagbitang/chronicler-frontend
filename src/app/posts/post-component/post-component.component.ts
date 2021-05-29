import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  @Input() post!: Post;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigate([id], {relativeTo: this.route})
  }

  editPost(id: number): void {
    this.router.navigate([id, 'edit'], {relativeTo: this.route})
  }

}
