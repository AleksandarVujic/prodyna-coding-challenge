import { Component, OnInit } from '@angular/core';

import { TitleService } from 'src/app/util/message-emmiter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title: string = "ABOUT";

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.emit(this.title);
  }

}
