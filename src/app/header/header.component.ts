import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 isActive:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isActive = false
  }

  openMenu(){
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }
  
}

