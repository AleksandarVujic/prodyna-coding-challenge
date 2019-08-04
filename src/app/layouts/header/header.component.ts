import { Component, OnInit, Input } from '@angular/core';
import { TitleService } from 'src/app/util/message-emmiter.service';

@Component({
  selector: 'header-prodyna',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.emitChange.subscribe(
      text => {
        this.title = text;
      });
  }

}
