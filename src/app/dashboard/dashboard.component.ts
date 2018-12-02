import { Component, OnInit } from '@angular/core';
import { ApiblogService } from '../apiblog.service';
import { Router,  NavigationStart } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId: any;
  userclick: any;
  editForm : FormGroup;
  clickEdit : any;
  clickIduser: any;
  deleteUser: any;
  allArticle: any;
  editArticle: FormGroup;
  clickUpdateArticle: any;
  comments: any;
  clickComment : any;
  isLoggedIn: any;

  constructor(private apiblogservice : ApiblogService, private fb : FormBuilder) { 
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
      
    });

    this.editArticle = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(4)]],
      content: ['', [Validators.required, Validators.maxLength(500), Validators.minLength(4)]],
  
    });
  }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('usertoken') ? true : false; /*pour changer login par logout*/
   
      }
   
 
//get all users
getUsers(){
    this.userclick= this.apiblogservice.getAllusers().subscribe(res => {
      this.userclick = res.json();
       console.log('userClick', this.userclick);
this.ngOnInit();
    });
}
//get user by id
getUserId(id){
  this.clickIduser = this.apiblogservice.getUserbyid(id).subscribe(res => {
    this.clickIduser = res.json();
     
  })
}
//edit user by id
editUser(id) {
  this.clickEdit = this.apiblogservice.editUsers(id, this.editForm.value).subscribe(res => {
    this.clickEdit = res.json();
    console.log('edit', this.clickEdit)
    this.ngOnInit();
  })

}

//remove user by id
removeUser(id){
  this.deleteUser = this.apiblogservice.deleteUserbyId(id).subscribe(res => {
    this.deleteUser = res.json();
    this.ngOnInit
  })
}

//get all articles 
getAllarticle(){
  this.allArticle = this.apiblogservice.getSubject().subscribe(res => {
    this.allArticle = res.json();
    console.log('all article', this.allArticle)
  });
}

//get article by id 
updateArticleID(id)  {
  console.log('ID updte', id);
  this.clickUpdateArticle = this.apiblogservice.getSubjectbyId(id).subscribe(res => {
    this.clickUpdateArticle= res.json();
    console.log('article update with id', this.clickUpdateArticle);

  });
}
// update article by id
updateSubjectID(id) {
  console.log('id articleeessss', id);
      this.apiblogservice.updateArticle(id, this.editArticle.value).subscribe(res => {
        console.log( 'response updateSubject', res);
        this.ngOnInit();
      });
  this.ngOnInit();
  }

// delete subject by id
  deleteSubjectID(id) {
    this.apiblogservice.deleteArticle( id).subscribe(res => {
      console.log('delete article', res);
    });

}

getAllComments() {
  this.apiblogservice.getComment().subscribe(res => {
    this.comments = res.json();
    console.log('all comments', this.comments);
  })
}

delteComment(id){
  this.apiblogservice.deleteCommentbyId(id).subscribe(res => {
    this.clickComment = res.json();
    this.ngOnInit();
    console.log('response delete comment', res)
  })
}
}
