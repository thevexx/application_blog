import { Component, OnInit } from '@angular/core';
import { ApiblogService } from '../apiblog.service';
import { Router,  NavigationStart } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allArticles: any;
  isLoggedIn: any;
  allComments: any;
  formComments: FormGroup;
  idUser: any;
  articleId = '';

  constructor(private apiblogservice: ApiblogService, private fb : FormBuilder) {
    this.formComments = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(4)]],
    });
   }

  ngOnInit() {
    /* get all articles*/
    this.apiblogservice.getSubject().subscribe(res => {
      this.allArticles = res.json();
      console.log('article', this.allArticles);
  });
    /* get all comments*/
this.apiblogservice.getComment().subscribe(res => {
  this.allComments = res.json();
  console.log('homee comments', this.allComments);
})
  this.isLoggedIn = localStorage.getItem('usertoken') ? true : false; 
    if (event instanceof NavigationStart) {
      this.isLoggedIn = localStorage.getItem('usertoken') ? true : false;
    }
  }

postComment(id) {
  if (this.formComments.valid) {
    const token = localStorage.getItem('usertoken');
    const userId = jwt_decode(token).data._id;
    const commentData = {
      "content": this.formComments.value.content,
      "author": userId
    }
    this.apiblogservice.addComments(id, commentData).subscribe(res => {
      console.log(res.json());
      this.ngOnInit();
    });
  }

}
}
