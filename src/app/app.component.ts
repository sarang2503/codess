import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavabarComponent } from './navabar/navabar.component';
import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfig';
import { getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavabarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

constructor(){
initializeApp(firebaseConfig);
getFirestore();

}  

}

