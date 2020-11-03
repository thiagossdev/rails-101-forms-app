import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UsersModule { }
