import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerModule } from '@iplab/ngx-color-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { AngularTokenModule } from 'angular-token';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FormsModule } from './forms/forms.module';
import { AnswersModule } from './answers/answers.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000',
      apiPath: 'api/v1',
      signInRedirect: '/login',
    }),
    
    FormsModule,
    AnswersModule,
    UsersModule,

    ColorPickerModule,
    ChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  providers: [AngularTokenModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
