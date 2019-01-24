import { Component, OnInit } from '@angular/core';
 import { ApiblogService } from '../apiblog.service';
import {  NavigationStart, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {

  article: any;
  isLoggedIn: any;
  allComments: any;
  formComments: FormGroup;
  idUser: any;
  articleId = '';
  idArticle: any;

  constructor(private apiblogservice: ApiblogService, private fb: FormBuilder, private url: ActivatedRoute) {
    this.formComments = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(4)]],
    });
   }

  ngOnInit() {
    this.url.params.subscribe(res => {
      console.log('url', res);
      this.idArticle = res['id'];
      console.log('id article', this.idArticle);
    });

    this.apiblogservice.getSubjectbyId(this.idArticle).subscribe(res => {
      this.article = res.json();
      console.log('comment', this.article.comments.length);
  });
  this.isLoggedIn = localStorage.getItem('usertoken') ? true : false;
    if (event instanceof NavigationStart) {
      this.isLoggedIn = localStorage.getItem('usertoken') ? true : false;
    }
  }

postComment(idArticle) {
  if (this.formComments.valid) {
    const token = localStorage.getItem('usertoken');
    const userId = jwt_decode(token).data._id;
    const commentData = {
      'content': this.formComments.value.content,
      'author': userId
    };
    this.apiblogservice.addComments(idArticle, commentData).subscribe(res => {
      console.log(res.json());
      this.ngOnInit();
    });
  }

}

}
