import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiblogService } from '../apiblog.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: String;
  formlogin: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private apiblogservice: ApiblogService) {
    this.formlogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    });
  }

loginAuthor() {
  if (this.formlogin.valid) {
    this.message = '';
    this.apiblogservice.loginUser(this.formlogin.value).subscribe(res => {
      console.log('login component ==>', res);
      if (res.json().message === 'ok' ) {
        localStorage.setItem('usertoken', res.json().userToken);
        this.router.navigateByUrl('/listsubject');
      } else {
        this.message = res.json().message;
      }
    });

  }
}
  ngOnInit() {
  }


}
