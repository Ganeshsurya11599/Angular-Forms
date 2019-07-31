import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
data:any={
  name:"",
  email:"",
  password:"",
  confirmpassword:""
}
onSubmit(value){
  this.data.name=value.name,
  this.data.email=value.email,
  this.data.password=value.password,
  this.data.confirmpassword=value.confirmpassword
console.log(this.data)
}
}