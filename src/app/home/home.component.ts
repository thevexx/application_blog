import { Component, OnInit } from '@angular/core';
import { ApiblogService } from '../apiblog.service';
import {  NavigationStart } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
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
  read: any;
i;
  nbrComments: any;
  constructor(private apiblogservice: ApiblogService, private fb: FormBuilder, private router: Router) {
    this.formComments = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(4)]],
    });
   }

  ngOnInit() {
    /* get all articles*/
    this.apiblogservice.getSubject().subscribe(res => {
      this.allArticles = res.json().reverse();
      for (this.i = 0; this.i < this.allArticles.length; this.i++) {
       this.nbrComments = this.allArticles[this.i].comments;
       console.log('length comment', this.nbrComments);
      }

  });

    /* get all comments*/
this.apiblogservice.getComment().subscribe(res => {
  this.allComments = res.json().reverse();
  console.log('comment',  this.allComments);

});
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
      'content': this.formComments.value.content,
      'author': userId
    };
    this.apiblogservice.addComments(id, commentData).subscribe(res => {
      console.log(res.json());
      this.ngOnInit();
    });
  }

}
readMore(id) {
  this.read =  this.router.navigate(['/home/', id  ]);
  console.log('read', this.read);
  return this.read;
}
}

