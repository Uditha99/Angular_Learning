import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{

  data:string | undefined
  constructor(private activatedRoute:ActivatedRoute) {
  }
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(response=>{
      this.data= response.get('data')!
    })
  }
}
