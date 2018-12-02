import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiblogService {
  constructor(private http: Http) { }

  registerUser(data) {
    console.log('data register', data);
    return this.http.post('http://localhost:8020/auth/register', data);
  }


  loginUser(data) {
    return this.http.post('http://localhost:8020/auth/login', data);
  }

getSubject() {
  return this.http.get('http://localhost:8020/blog//article');
}

getSubjectbyId(id) {
      return this.http.get('http://localhost:8020/blog/article/' + id);
}


subjectUser(id) {
  return this.http.get('http://localhost:8020/blog/articleuser/' + id);
}

addArticle(data) {
  console.log('data service', data);
  return this.http.post('http://localhost:8020/blog/article', data);
}
deleteArticle(id) {
  console.log('id article servixe', id);
  return this.http.delete('http://localhost:8020/blog/article/' + id ) ;
}

updateArticle(id, editarticle) {
  console.log('id article a modifier service', id);
  console.log('contenue a modifier service', editarticle);
  return this.http.put('http://localhost:8020/blog/article/' + id,  editarticle);
}
getComment() {
  return this.http.get('http://localhost:8020/blog/comment');
}

addComments(id, data) {
  console.log('comment service', data);
  console.log('id article comment service', id);

  return this.http.post('http://localhost:8020/blog/comment/' + id, data);
}
getAllusers() {
  return this.http.get('http://localhost:8020/auth/allusers/');
}


editUsers(id, data) {
  console.log('edit user id', id);
  console.log('edit user id data', data);
  return this.http.put('http://localhost:8020/auth/updateuser/'+ id, data);
}

getUserbyid(id){
  return this.http.get('http://localhost:8020/auth/userbyid/'+ id)
}

deleteUserbyId(id) {
  return this.http.delete('http://localhost:8020/auth/removeuser/' + id)
}

deleteCommentbyId(id){
  return this.http.delete('http://localhost:8020/blog/comment/' + id)
}
}
