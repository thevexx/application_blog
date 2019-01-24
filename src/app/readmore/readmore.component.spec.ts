import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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
      imports: [ReactiveFormsModule, FormsModule, HttpModule, RouterTestingModule, HttpClientTestingModule]
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
  const idArticle = '5c46f3be94c3e63134d94a10';
const comment = component.formComments.controls['content'];
comment.setValue('commentaire ng test');
expect(component.formComments.valid).toBeTruthy();
component.postComment(idArticle);
  });

  it('invalid comment', () => {
    const idArticle = '5c46f3be94c3e63134d94a10';
const comment = component.formComments.controls['content'];
comment.setValue('my');
 expect(component.formComments.invalid).toBeTruthy();
 component.postComment(idArticle);
  });
  });

