import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListsubjectComponent } from './listsubject/listsubject.component';
import { HomeComponent } from './home/home.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteGuard } from './route.guard';
import { RoleGuard } from './role.guard';
import { ReadmoreComponent } from './readmore/readmore.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuard, RoleGuard], data: { role: ['admin', 'user'] } },
  { path: 'addarticle', component: AddarticleComponent, canActivate: [RouteGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listsubject', component: ListsubjectComponent, canActivate: [RouteGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: ReadmoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
