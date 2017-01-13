import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public value:number;
	public subvalue:number;
  constructor() { }

  ngOnInit() {
	  this.value = 1;
	  this.subvalue = 1;
  }

}
