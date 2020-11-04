import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as CoreFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerNewComponent } from './answer-new/answer-new.component';
import { GraphNumberComponent } from './shared/graph-number/graph-number.component';
import { GraphTextComponent } from './shared/graph-text/graph-text.component';
import { GraphBooleanComponent } from './shared/graph-boolean/graph-boolean.component';
import { IndividualDetailsComponent } from './shared/individual-details/individual-details.component';
import { AllComponent } from './answer-list/all/all.component';
import { IndividualComponent } from './answer-list/individual/individual.component';

@NgModule({
  declarations: [
    AnswerListComponent,
    AnswerNewComponent,
    GraphNumberComponent,
    GraphTextComponent,
    GraphBooleanComponent,
    IndividualDetailsComponent,
    AllComponent,
    IndividualComponent
  ],
  imports: [
    CommonModule,
    CoreFormsModule,
    ChartsModule
  ]
})
export class AnswersModule { }
