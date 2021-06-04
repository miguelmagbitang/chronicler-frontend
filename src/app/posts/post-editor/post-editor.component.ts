import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import * as ClassicEditor from '../../ckeditor5autosave';
import { Post } from '../post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {

  @ViewChild('myEditor') myEditor: any;
  id: number;
  editMode: boolean;
  public editorData = 'Type your content here';

  date = new FormControl(new Date());
  value = 0;
  public editor = ClassicEditor;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  public saveData( data: any ) {
		console.log('Saved!')
	}

  saveArticle() {
    console.log(this.getArticleContent());
  }

  private getArticleContent() {
    if (this.myEditor && this.myEditor.editorInstance) {
      return this.myEditor.editorInstance.getData();
    }
    return '';
  }

  loadArticle(content: string) {
    console.log('load article', this.myEditor)
    this.editorData = content;
  }

  ngOnInit(): void {
    // ClassicEditor.create
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
      this.loadArticle(post.content);
    }
  }

  // formatLabel(value: number) {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + 'k';
  //   }

  //   return value +;
  // }

}
