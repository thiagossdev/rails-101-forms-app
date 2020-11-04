import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AngularTokenService } from 'angular-token';

import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public tokenService: AngularTokenService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.tokenService.signOut().subscribe(
      res => { },
      (error: HttpErrorResponse) => {
        M.toast({html: 'Connection Error ☹️', classes: 'red'})
      }
    );
  }
}
