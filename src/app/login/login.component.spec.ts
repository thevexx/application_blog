import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Test Component LOGIN', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpModule, HttpClientTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('form invalid when empty', () => {
    expect(component).toBeDefined();
  });
  it('email and password valid', () => {
    const emailUser = component.formlogin.controls['email'];
    emailUser.setValue('za@gmail.com');
    const passwordUser = component.formlogin.controls['password'];
    passwordUser.setValue('12345678');
    expect(component.formlogin.valid).toBeTruthy();
    component.loginAuthor();


  });

  it('email invalid and password valid', () => {
    const emailUser = component.formlogin.controls['email'];
    emailUser.setValue('emailinvalid');
    const passwordUser = component.formlogin.controls['password'];
    expect(component.formlogin.controls['email'].invalid).toBeTruthy();
    passwordUser.setValue('12345678');
     component.loginAuthor();

  });

  it('email valid and password invalid', () => {
    const emailUser = component.formlogin.controls['email'];
    emailUser.setValue('za@gmail.com');
    const passwordUser = component.formlogin.controls['password'];
    passwordUser.setValue('12');
      expect(component.formlogin.controls['password'].invalid).toBeTruthy();
    component.loginAuthor();

  });

  it('email invalid and password invalid', () => {
    const emailUser = component.formlogin.controls['email'];
    emailUser.setValue('invlaidmail');
    const passwordUser = component.formlogin.controls['password'];
    passwordUser.setValue('pass');
    expect(component.formlogin.invalid).toBeTruthy();
    component.loginAuthor();
  });

  it('email and password invalid test backend', () => {
    const emailUser = component.formlogin.controls['email'];
    emailUser.setValue('za@gmfffail.com');
    const passwordUser = component.formlogin.controls['password'];
    passwordUser.setValue('12345678fff');
    expect(component.formlogin.valid).toBeTruthy();
    component.loginAuthor();


  });

});
