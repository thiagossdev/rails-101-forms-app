import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AngularTokenService, RegisterData } from 'angular-token';

import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public _registerData: RegisterData = <RegisterData>{};

  constructor(private _tokenService: AngularTokenService) { }

  ngOnInit(): void {
  }


  // Submit Data to Backend
  onSubmit() {
    this._tokenService.registerAccount(this._registerData).subscribe(
      res => {
        this._registerData = <RegisterData>{};
        M.toast({html: 'Success, please confirm your Email 😁', classes: 'green', displayLength: 8000});
      }, (error: HttpErrorResponse) => {
        this._registerData = <RegisterData>{};
        if ( error.status !== 0 ) {
          for (const message of error.error.errors.full_messages) {
            M.toast({html: message, classes: 'red', displayLength: 8000});
          }
        } else {
          M.toast({html: 'Connection Error ☹️', classes: 'red', displayLength: 8000});
        }
      }
    );
  }
}
