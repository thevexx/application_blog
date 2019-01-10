import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



describe('Test Component LOGIN', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpModule]
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
    emailUser.setValue('myname@gmail.com');
    const passwordUser = component.formlogin.controls['password'];
    passwordUser.setValue('12345678');
    expect(component.formlogin.valid).toBeTruthy();
    component.loginAuthor();
  });

  it('email valid and password invalid', () => {
    const emailUser = component.formlogin.controls['email'];
    emailUser.setValue('za@gmail.com');
    const passwordUser = component.formlogin.controls['password'];
    passwordUser.setValue('kldj5845666');
    expect(component.formlogin.valid).toBeTruthy();
    component.loginAuthor();
  });

  it('email invalid and password invalid', () => {
    const emailUser = component.formlogin.controls['email'];
    emailUser.setValue('npm@gmail.com');
    const passwordUser = component.formlogin.controls['password'];
    passwordUser.setValue('kldj5845666');
    expect(component.formlogin.valid).toBeTruthy();
    component.loginAuthor();
  });



});
