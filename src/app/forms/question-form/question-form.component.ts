import { Component, Input, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

import { QuestionService } from '../../shared/question.service';

import { Question } from '../../shared/question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  @Input() questions: Question[];
  @Input() question: Question;
  @Input() form_id: number;
  
  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      let elems = document.querySelectorAll('select');
      M.FormSelect.init(elems);
    }, 100);
  }

  onSubmit(f) {
    if (this.question.id) {
      this.questionService.update(this.question.id, this.question).subscribe(data => {
        M.toast({html: 'Question updated 😁', classes: 'green'});
      }, error => {
        M.toast({html: 'Problem in Question update ☹️', classes: 'red'});
      });
    } else {
      this.questionService.create(this.form_id, this.question).subscribe(data => {
        this.questions.push(new Question(data));
        this.question = new Question({});
      }, error => {
        M.toast({html: 'Problem in Question creation ☹️', classes: 'red'});
      });
    }
  }

  deleteForm(form): boolean {
    if (confirm('Your want delete this question?')) {
      this.questionService.destroy(this.question.id).subscribe(data => {
        const index = this.questions.indexOf (this.question);
        this.questions.splice(index, 1);
        M.toast({html: 'Question deleted 😁', classes: 'green'});
      }, error => {
        M.toast({html: `Error in delete question ${this.question.title} ☹️`, classes: 'red'});
      });
    }
    return false;
  }
}
