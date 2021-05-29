import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as ClassicEditor from '../../ckeditor5autosave';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {

  @ViewChild('myEditor') myEditor: any;

  date = new FormControl(new Date());
  value = 0;
  public editor = ClassicEditor;
  public config = {
    autosave: {
      // The minimum amount of time the Autosave plugin is waiting after the last data change.
			waitingTime: 5000,
			save: (editor: { getData: () => any; }) => this.saveData( editor.getData() )
    }
  }
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

  constructor() { }

  ngOnInit(): void {
    ClassicEditor.create
  }

  // formatLabel(value: number) {
  //   if (value >= 1000) {
  //     return Math.round(value / 1000) + 'k';
  //   }

  //   return value +;
  // }

}
