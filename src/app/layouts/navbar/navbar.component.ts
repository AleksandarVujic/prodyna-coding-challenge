import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'navbar-prodyna',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  width: number;
  marginLeft: number;
  toggleBtn: boolean = false;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.toggleNav()
  }

  toggleNav() {
    if (this.toggleBtn === false) {
      this.width = 90;
      this.marginLeft = 90;
    } else {
      this.width = 250;
      this.marginLeft = 250;
    }
    this.toggleBtn = !this.toggleBtn;
  }


}
