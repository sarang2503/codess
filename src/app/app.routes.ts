import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { CreatebinComponent } from './components/createbin/createbin.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundError } from 'rxjs';
import { SnipidComponent } from './components/snipid/snipid.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'about', component:AboutComponent},
    {path:'create',component:CreatebinComponent},
    {path:'',component:HomeComponent},
    {path:'snippet/:id',component:SnipidComponent},
    {path:'**',component:NotFoundError},



    // {path:"",redirectTo:"/login",pathMatch:"full"}
];
