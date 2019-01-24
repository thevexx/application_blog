import { Component, OnInit } from '@angular/core';
import { ApiblogService } from '../apiblog.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-listsubject',
  templateUrl: './listsubject.component.html',
  styleUrls: ['./listsubject.component.css']
})
export class ListsubjectComponent implements OnInit {
  editArticle: FormGroup;
  userId: any;
  result: any;
  clicked: any;
  mySubject;
  comment;

  constructor(private apiblogservice: ApiblogService, private router: Router, private fb: FormBuilder) {
    this.editArticle = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(4)]],
     content: ['', [Validators.required, Validators.maxLength(8000), Validators.minLength(4)]],
    });

   }

  ngOnInit() {
    const token = localStorage.getItem('usertoken');
    /*id utilisateur*/
    this.userId = jwt_decode(token).data._id;
    console.log('id utilisateur', this.userId);
    this.apiblogservice.subjectUser(this.userId).subscribe(res => {
      this.result = res.json();
      console.log('response subjectuser', this.result[0]._id);
    });
this.apiblogservice.getComment().subscribe(res => {
  this.comment = res.json();
  console.log('comment', this.comment);
});

  }

  deleteSubject(id) {
      this.apiblogservice.deleteArticle( id).subscribe(res => {
        console.log('delete article', res);
        this.ngOnInit();
      });

  }

  update(id) {
    console.log('ID updte', id);
    this.clicked = this.apiblogservice.getSubjectbyId(id).subscribe(res => {
      this.clicked = res.json();
       console.log('clicked', this.clicked);
      console.log('article with id',  res);

    });
  }

  updateSubject(id) {
console.log('id articleeessss', id);
    this.apiblogservice.updateArticle(id, this.editArticle.value).subscribe(res => {
      console.log( 'response updateSubject', res);
      this.ngOnInit();
    });

}
}
