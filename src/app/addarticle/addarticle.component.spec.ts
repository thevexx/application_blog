import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddarticleComponent } from './addarticle.component';
import { ReactiveFormsModule, FormsModule, Validator, FormGroup, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AddarticleComponent', () => {
  let component: AddarticleComponent;
  let fixture: ComponentFixture<AddarticleComponent>;
  // Path image to upload
  const path = require('path');
  const fileToUpload = '../../01.jpg';
  const linkFile = path.resolve(__dirname, fileToUpload);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddarticleComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpModule, HttpClientTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AddarticleComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('title, content and upload image valid', () => {
    const titleArticle = component.addarticles.controls['title'];
    titleArticle.setValue('First article');
    const contentArticle = component.addarticles.controls['content'];
    contentArticle.setValue('fivepoints');
    const linkImage = component.addarticles.controls['imagePath'];
    linkImage.setValue(linkFile);
    expect(component.addarticles.valid).toBeTruthy();
    component.uploadFile();
    component.addSubject();

  });

  it('title invalid and content valid', () => {
    const titleArticle = component.addarticles.controls['title'];
    titleArticle.setValue('Hi');
    const contentArticle = component.addarticles.controls['content'];
    contentArticle.setValue('hello my name is elyes maamouri');
    const linkImage = component.addarticles.controls['imagePath'];
    linkImage.setValue(linkFile);
     component.uploadFile();
    component.addSubject();
     expect(component.addarticles.controls['title'].invalid).toBeTruthy();
    });


  it('title valid and content invalid', () => {
      const titleArticle = component.addarticles.controls['title'];
    titleArticle.setValue('Hello world');
    const contentArticle = component.addarticles.controls['content'];
    contentArticle.setValue('hi');
    const linkImage = component.addarticles.controls['imagePath'];
    linkImage.setValue(linkFile);
     component.uploadFile();
    component.addSubject();
     expect(component.addarticles.controls['content'].invalid).toBeTruthy();

  });


  it('title invalid and content invalid', () => {
     const titleArticle = component.addarticles.controls['title'];
    titleArticle.setValue('Hi');
    const contentArticle = component.addarticles.controls['content'];
    contentArticle.setValue('hi');
    const linkImage = component.addarticles.controls['imagePath'];
    linkImage.setValue(linkFile);
     component.uploadFile();
    component.addSubject();
     expect(component.addarticles.controls['title'].invalid).toBeTruthy();
     expect(component.addarticles.controls['content'].invalid).toBeTruthy();

  });

});
