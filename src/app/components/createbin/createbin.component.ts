import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../component/snippet';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-createbin',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './createbin.component.html',
  styleUrl: './createbin.component.css'
})
export class CreatebinComponent {

  constructor(private dbservice:DbService,private router:Router){}
  title= new FormControl("",[
    Validators.required,
  ])
  code= new FormControl("",[
    Validators.required,
  ])
  
  binForm = new FormGroup({
    title:this.title,
    code:this.code
  })
  save(){
    console.log(this.binForm)
    this.dbservice.createSnip(this.binForm.value as Snippet)
    this.router.navigate([''])
  }

}
