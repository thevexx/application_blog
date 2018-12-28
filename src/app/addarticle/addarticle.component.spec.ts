import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddarticleComponent } from './addarticle.component';
import { ReactiveFormsModule, FormsModule, Validator, FormGroup, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('AddarticleComponent', () => {
  let component: AddarticleComponent;
  let fixture: ComponentFixture<AddarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddarticleComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AddarticleComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('title and content valid', () => {
    const titleArticle = component.addarticles.controls['title'];
    titleArticle.setValue('First article');
    const contentArticle = component.addarticles.controls['content'];
    contentArticle.setValue('hello my name is elyes maamouri');
    expect(component.addarticles.valid).toBeTruthy();


  });
  it('title invalid and content valid', () => {
    const titleArticle = component.addarticles.controls['title'];
    titleArticle.setValue('Hi');
    const contentArticle = component.addarticles.controls['content'];
    contentArticle.setValue('hello my name is elyes maamouri');

    expect(component.addarticles.valid).toBeFalsy();
    expect(component.addarticles.controls['title'].valid).toBeFalsy();
    expect(component.addarticles.controls['title'].errors).toBeDefined();

  });

  it('title valid and content invalid', () => {
    const titleArticle = component.addarticles.controls['title'];
    titleArticle.setValue('Hello');
    const contentArticle = component.addarticles.controls['content'];
    contentArticle.setValue('Hi');

    expect(component.addarticles.valid).toBeFalsy();
    expect(component.addarticles.controls['content'].valid).toBeFalsy();
    expect(component.addarticles.controls['content'].errors).toBeDefined();

  });


  it('title invalid and content invalid', () => {
    const titleArticle = component.addarticles.controls['title'];
    titleArticle.setValue('He');
    const contentArticle = component.addarticles.controls['content'];
    contentArticle.setValue('Hi');

    expect(component.addarticles.valid).toBeFalsy();
    expect(component.addarticles.controls['title'].valid).toBeFalsy();
    expect(component.addarticles.controls['title'].errors).toBeDefined();
    expect(component.addarticles.controls['content'].valid).toBeFalsy();
    expect(component.addarticles.controls['content'].errors).toBeDefined();

  });
});
