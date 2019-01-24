import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, Validator, FormGroup, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 it('all input valid', () => {
    const nameUser = component.formregister.controls['name'];
    nameUser.setValue('ilyes');
    const lsnameUser = component.formregister.controls['lastname'];
    lsnameUser.setValue('maamouri');
    const emailUser = component.formregister.controls['email'];
    emailUser.setValue('issseeeeaooaes@gmail.com');
    const passUser = component.formregister.controls['password'];
    passUser.setValue('12345678');
    expect(component.formregister.valid).toBeTruthy();
    component.registerForm();


  });
  it('all input invalid', () => {
    const nameUser = component.formregister.controls['name'];
    nameUser.setValue('i');
    const lsnameUser = component.formregister.controls['lastname'];
    lsnameUser.setValue('maa');
    const emailUser = component.formregister.controls['email'];
    emailUser.setValue('ilyessgmail.com');
    const passUser = component.formregister.controls['password'];
    passUser.setValue('123456');
    expect(component.formregister.invalid).toBeTruthy();
  component.registerForm();


  });
  it('name invalid', () => {
    const nameUser = component.formregister.controls['name'];
    nameUser.setValue('ee');
    const lsnameUser = component.formregister.controls['lastname'];
    lsnameUser.setValue('maamouri');
    const emailUser = component.formregister.controls['email'];
    emailUser.setValue('maamouri@gmail.com');
    const passUser = component.formregister.controls['password'];
    passUser.setValue('12345678');
   expect(component.formregister.controls['name'].invalid).toBeTruthy();
    component.registerForm();

  });

  it('Lastname invalid', () => {
    const nameUser = component.formregister.controls['name'];
    nameUser.setValue('elyes');
    const lsnameUser = component.formregister.controls['lastname'];
    lsnameUser.setValue('eoo');
    const emailUser = component.formregister.controls['email'];
    emailUser.setValue('pp@gmail.com');
    const passUser = component.formregister.controls['password'];
    passUser.setValue('123456789');
     expect(component.formregister.controls['lastname'].errors).toBeDefined();
  expect(component.formregister.controls['lastname'].invalid).toBeTruthy();
    component.registerForm();

  });
  it('Email invalid', () => {
    const nameUser = component.formregister.controls['name'];
    nameUser.setValue('elyes');
    const lsnameUser = component.formregister.controls['lastname'];
    lsnameUser.setValue('maamouri');
    const emailUser = component.formregister.controls['email'];
    emailUser.setValue('thebest');
    const passUser = component.formregister.controls['password'];
    passUser.setValue('12345678');
    expect(component.formregister.controls['email'].invalid).toBeTruthy();
    component.registerForm();

  });

  it('password invalid', () => {
    const nameUser = component.formregister.controls['name'];
    nameUser.setValue('elyes');
    const lsnameUser = component.formregister.controls['lastname'];
    lsnameUser.setValue('maamouri');
    const emailUser = component.formregister.controls['email'];
    emailUser.setValue('elyes@gmail.com');
    const passUser = component.formregister.controls['password'];
    passUser.setValue('123456');
  expect(component.formregister.controls['password'].invalid).toBeTruthy();

  });
});
