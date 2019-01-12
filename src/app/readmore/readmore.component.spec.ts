import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReadmoreComponent } from './readmore.component';

describe('ReadmoreComponent', () => {
  let component: ReadmoreComponent;
  let fixture: ComponentFixture<ReadmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmoreComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpModule, RouterTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ReadmoreComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  });

  it('valid comment', () => {
const comment = component.formComments.controls['content'];
comment.setValue('comment test');
expect(component.formComments.valid).toBeTruthy();
  });
});
