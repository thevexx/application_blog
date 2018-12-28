import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, Validator, FormGroup, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { HttpModule } from '@angular/http';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpModule]
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
    emailUser.setValue('ilyess@gmail.com');
    const passUser = component.formregister.controls['password'];
    passUser.setValue('12345678');
    expect(component.formregister.valid).toBeTruthy();


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
    expect(component.formregister.valid).toBeFalsy();
    expect(component.formregister.controls['name'].valid).toBeFalsy();
    expect(component.formregister.controls['name'].errors).toBeDefined();

  });

  it('Lastname invalid', () => {
    const nameUser = component.formregister.controls['name'];
    nameUser.setValue('elyes');
    const lsnameUser = component.formregister.controls['lastname'];
    lsnameUser.setValue('ma');
    const emailUser = component.formregister.controls['email'];
    emailUser.setValue('maamouri@gmail.com');
    const passUser = component.formregister.controls['password'];
    passUser.setValue('12345678');
    expect(component.formregister.valid).toBeFalsy();
    expect(component.formregister.controls['lastname'].valid).toBeFalsy();
    expect(component.formregister.controls['lastname'].errors).toBeDefined();

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
    expect(component.formregister.valid).toBeFalsy();
    expect(component.formregister.controls['email'].valid).toBeFalsy();
    expect(component.formregister.controls['email'].errors).toBeDefined();

  });
  /*it('password invalid', () => {
    const nameUser = component.formregister.controls['name'];
    nameUser.setValue('elyes');
    const lsnameUser = component.formregister.controls['lastname'];
    lsnameUser.setValue('maamouri');
    const emailUser = component.formregister.controls['email'];
    emailUser.setValue('elyes@gmail.com');
    const passUser = component.formregister.controls['password'];
    passUser.setValue('123456');
    expect(component.formregister.valid).toBeFalsy();
    expect(component.formregister.controls['password'].valid).toBeFalsy();
    expect(component.formregister.controls['paswword'].errors).toBeDefined();

  });*/
});
