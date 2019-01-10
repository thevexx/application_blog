import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiblogService } from '../apiblog.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: String;
  formlogin: FormGroup;
  constructor(private router: Router, private apiblogservice: ApiblogService) {
    this.formlogin = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),


    });
  }

loginAuthor() {
  console.log('hello login');
  if (this.formlogin.valid) {
    this.message = '';
    this.apiblogservice.loginUser(this.formlogin.value).subscribe(res => {
      console.log('login component ==>', res.json());
      if (res.json().message === 'ok' ) {
        localStorage.setItem('usertoken', res.json().userToken);
        localStorage.setItem('response', res.json().status);
        this.router.navigate(['/home']);
      } else {
        this.message = res.json().message;
        localStorage.setItem('response', res.json().status);

      }
      this.apiblogservice.sendEmail(this.formlogin.value.email);
      this.apiblogservice.sendPassword(this.formlogin.value.password);
    });

  }
}
  ngOnInit() {
  }


}
