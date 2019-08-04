import { Component, OnInit } from '@angular/core';

import { TitleService } from 'src/app/util/message-emmiter.service';

@Component({
  selector: 'prodyna-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = "HOME";

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.emit(this.title);
  }

}
