import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { AngularTokenService, SignInData } from 'angular-token';

import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public _signInData: SignInData = <SignInData>{};

  constructor(
    private _tokenService: AngularTokenService,
    // private toastService: MzToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._tokenService.signIn(this._signInData).subscribe(
      res => {
        this.router.navigate(['/forms']);
      }, (error: HttpErrorResponse) => {
        this._signInData = <SignInData>{};
        console.log(error.error);
        if ( error.status !== 0 ) {
          for (const message of error.error.errors) {
            M.toast({html: message, classes: 'red', displayLength: 8000});
          }
        } else {
          M.toast({html: 'Connection Error ☹️', classes: 'red', displayLength: 8000});
        }
      }
    );
  }
}
