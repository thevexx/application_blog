import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiblogService } from '../apiblog.service';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {
addarticles: FormGroup;
  userId: any;
  constructor(private router: Router, private apiblogservice: ApiblogService, private fb: FormBuilder) {
    this.addarticles = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(4)]],
     content: ['', [Validators.required, Validators.maxLength(8000), Validators.minLength(4)]],
    });
   }

   ngOnInit() {
  }
addSubject() {
  if (this.addarticles.valid) {

    const token = localStorage.getItem('usertoken');
   const userId = jwt_decode(token).data._id;
   console.log('id user addsubject', this.userId);
    this.addarticles.value['author'] = userId;
    console.log('id user addsubject', this.userId);

  this.apiblogservice.addArticle( this.addarticles.value).subscribe(res => {
    console.log(res.json());
  });
  this.router.navigateByUrl('/listsubject');
}
}
}
