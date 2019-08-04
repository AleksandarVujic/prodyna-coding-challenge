import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/util/message-emmiter.service';

@Component({
  selector: 'app-technical-support',
  templateUrl: './technical-support.component.html',
  styleUrls: ['./technical-support.component.scss']
})
export class TechnicalSupportComponent implements OnInit {

  title: string = 'Technical Support';

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.emit(this.title);
  }

}
