import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListsubjectComponent } from './listsubject.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ListsubjectComponent', () => {
  let component: ListsubjectComponent;
  let fixture: ComponentFixture<ListsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsubjectComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Delete article', () => {
    const idArticle = '5c408370d9183f372866c73e';
    component.deleteSubject(idArticle);

  });
 it('update article', () => {
    const idArticle = '5c4634b69e59112500ae652e';
    const titleArticle = component.editArticle.controls['title'];
    titleArticle.setValue('Hello Fivepoints');
    const contentArticle = component.editArticle.controls['content'];
    contentArticle.setValue('Hello Fivepoints');
    expect(component.editArticle.valid).toBeTruthy();
   component.updateSubject(idArticle);
  });

  it('update article title invalid', () => {
    const idArticle = '5c4634b69e59112500ae652e';
    const titleArticle = component.editArticle.controls['title'];
    titleArticle.setValue('hi');
    const contentArticle = component.editArticle.controls['content'];
    contentArticle.setValue('Hello Fivepoints');
    expect(component.editArticle.controls['title'].invalid).toBeTruthy();
   component.updateSubject(idArticle);
  });

  it('update article content invalid', () => {
    const idArticle = '5c4634b69e59112500ae652e';
    const titleArticle = component.editArticle.controls['title'];
    titleArticle.setValue('hi');
    const contentArticle = component.editArticle.controls['content'];
    contentArticle.setValue('Hello Fivepoints');
    expect(component.editArticle.controls['title'].invalid).toBeTruthy();
   component.updateSubject(idArticle);
  });
});
