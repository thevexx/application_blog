import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListsubjectComponent } from './listsubject/listsubject.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteGuard } from './route.guard';
import { RoleGuard } from './role.guard';
import { ReadmoreComponent } from './readmore/readmore.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListsubjectComponent,
    HomeComponent,
    MenuComponent,
    AddarticleComponent,
    DashboardComponent,
    ReadmoreComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [RouteGuard, RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
