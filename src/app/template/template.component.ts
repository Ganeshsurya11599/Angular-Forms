import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
onSubmit(value:any){
console.log(value);
}
dontshow=true;
select:any;
  constructor() {  }

  ngOnInit() {
  }
change(value){
  this.select=value;
}
}
