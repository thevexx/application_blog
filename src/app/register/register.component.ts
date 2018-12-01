import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiblogService } from '../apiblog.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formregister: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private apiblogservice: ApiblogService) {
    this.formregister = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  registerForm() {
    if (this.formregister.valid) {
      this.apiblogservice.registerUser(this.formregister.value).subscribe(res => {
        console.log('register respone ==>', res);
        this.router.navigateByUrl('/login');
      });
    }
  }

  ngOnInit() {
  }

}
