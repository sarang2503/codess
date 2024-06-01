import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navabar',
  standalone: true,
  imports: [RouterLink,LoginComponent,SignupComponent,RouterLinkActive],
  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.css'
})
export class NavabarComponent {
  constructor (public authService:AuthService, private router:Router){}

}
