import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule as CoreFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ColorPickerModule } from '@iplab/ngx-color-picker';

import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ActiveComponent } from './shared/active/active.component';
import { FormFormComponent } from './form-form/form-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';

@NgModule({
  declarations: [
    FormListComponent,
    FormEditComponent,
    ActiveComponent,
    FormFormComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreFormsModule,
    ColorPickerModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormListComponent,
  ],
})
export class FormsModule { }
