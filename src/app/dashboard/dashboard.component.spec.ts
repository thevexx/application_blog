import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ReactiveFormsModule, FormsModule,  HttpModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


it('remove user', () => {
  const id = '5bf58714ff1e10177c517e29';
component.getUsers();
component.removeUser(id);
});

it('update user All input valid', () => {
  const id = '5bf58715ff1e10177c517e2a';
component.getUsers();

const nameUser = component.editForm.controls['name'];
nameUser.setValue('elyes');
const lastnameUser = component.editForm.controls['lastname'];
lastnameUser.setValue('maamouri');
const emailUser = component.editForm.controls['email'];
emailUser.setValue('email@email.com');
component.editUser(id);
});

it('update user All input invalid', () => {
const id = '5bf58715ff1e10177c517e2a';
component.getUsers();
const nameUser = component.editForm.controls['name'];
nameUser.setValue('yu');
const lastnameUser = component.editForm.controls['lastname'];
lastnameUser.setValue('ma');
const emailUser = component.editForm.controls['email'];
emailUser.setValue('email.com');
component.editUser(id);
expect(component.editForm.invalid).toBeTruthy();

});
it('update user name invalid', () => {
  const id = '5bf58715ff1e10177c517e2a';
  component.getUsers();
  const nameUser = component.editForm.controls['name'];
  nameUser.setValue('yu');
  const lastnameUser = component.editForm.controls['lastname'];
  lastnameUser.setValue('marko');
  const emailUser = component.editForm.controls['email'];
  emailUser.setValue('rr@email.com');
  component.editUser(id);
  expect(component.editForm.controls['name'].invalid).toBeTruthy();

  });
});
