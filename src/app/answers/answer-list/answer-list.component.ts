import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => M.Tabs.init(document.querySelectorAll('.tabs')), 100);
  }
}
