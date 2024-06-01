import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { FormsModule } from '@angular/forms';
import { Snippet } from '../../../component/snippet';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dbserv:DbService){
    this.ngOnInIt();
  }

  items:{id:string,title:string}[] =[];
  ngOnInIt(){

    this.dbserv.getAllSnip().then((data:any)=>{
      
      this.items=data;
    })


}
}
