import { Component } from '@angular/core';
import { FormControl,  FormGroup,  NgForm,  ReactiveFormsModule, Validators } from '@angular/forms';
import { CreatebinComponent } from '../createbin/createbin.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reset(){
    this.loginForm.reset()
  }
  constructor (private authService:AuthService,private router:Router){}



  email= new FormControl("",[
    Validators.required,
    Validators.email
  ])
  password= new FormControl("",[
    Validators.required,
    Validators.minLength(6)
  ])
  
  loginForm = new FormGroup({
    email:this.email,
    password:this.password
  })
   
    
  login(){
    this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!)
    this.router.navigate([''])
  
  }

}
