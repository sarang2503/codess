import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-snipid',
  standalone: true,
  imports: [],
  templateUrl: './snipid.component.html',
  styleUrl: './snipid.component.css'
})
export class SnipidComponent {
  constructor(private dbservice:DbService,private route:ActivatedRoute,private router:Router){

  }
  codeSnipit={
    title:"",
    code:""
  }
  ngOnInit(){
    const currid = this.route.snapshot.paramMap.get('id');
    this.dbservice.getSnippetById(currid!).then(
      (data:any)=>{this.codeSnipit=data}
    )
  }
  back(){
    this.router.navigate([''])
  }

}
