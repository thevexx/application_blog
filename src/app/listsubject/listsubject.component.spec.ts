import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListsubjectComponent } from './listsubject.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('ListsubjectComponent', () => {
  let component: ListsubjectComponent;
  let fixture: ComponentFixture<ListsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsubjectComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
