import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import * as ClassicEditor from '../../ckeditor5autosave';
import { Post } from '../post.model';
import { PostService } from '../post.service';

import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {
  editForm = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(new Date()),
    mood: new FormControl(''),
    content: new FormControl('')
  })

  @ViewChild('myEditor') myEditor: any;
  id: number;
  editMode: boolean;
  public content = 'Type your content here';

  public editor = ClassicEditor;

  constructor(private route: ActivatedRoute, private postService: PostService, private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

  onSave() {
    this.openSnackBar("Post saved!", "OK");
    console.log(this.getArticleContent());
    this.content = this.getArticleContent();
    console.log(this.editForm.get("title").value);
    console.log(this.editForm.get("date").value);
    console.log(this.editForm.get("mood").value);
    console.log(this.content);
    const post = new Post(this.editForm.get("title").value, this.editForm.get("date").value, this.editForm.get("mood").value, this.content);
    console.log(post);
    if (this.editMode) {
      this.postService.updatePost(this.id, post);
    } else {
      this.postService.addPost(post);
    }
  }

  private getArticleContent() {
    if (this.myEditor && this.myEditor.editorInstance) {
      return this.myEditor.editorInstance.getData();
    }
    return '';
  }

  loadArticle(post: Post) {
    console.log('load article', this.myEditor);
    this.editForm.get('title').setValue(post.title);
    this.editForm.get('date').setValue(new Date(post.date));
    this.editForm.get('mood').setValue(post.mood);
    this.content = post.content;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        console.log('id'+this.id+", edit"+this.editMode);
      }
    )
  }

  initForm() {
    if (this.editMode) {
      const post = this.postService.getPost(this.id);
      this.loadArticle(post);
    }
  }

}
