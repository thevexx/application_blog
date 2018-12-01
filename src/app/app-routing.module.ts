import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListsubjectComponent } from './listsubject/listsubject.component';
import { HomeComponent } from './home/home.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListuserComponent } from './listuser/listuser.component';
 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listuser', component: ListuserComponent },
  { path: 'dashboard', component: DashboardComponent },
   { path: 'addarticle', component: AddarticleComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listsubject', component: ListsubjectComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
