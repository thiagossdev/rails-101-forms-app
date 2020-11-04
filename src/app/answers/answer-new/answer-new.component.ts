import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as M from 'materialize-css/dist/js/materialize';

import { AnswerService } from 'src/app/shared/answer.service';
import { FormService } from 'src/app/shared/form.service';
import { QuestionService } from 'src/app/shared/question.service';

import { Answer } from 'src/app/shared/answer.model';
import { Form } from 'src/app/shared/form.model';
import { QuestionsAnswer } from 'src/app/shared/questions_answer.model';

@Component({
  selector: 'app-answer-new',
  templateUrl: './answer-new.component.html',
  styleUrls: ['./answer-new.component.scss']
})
export class AnswerNewComponent implements OnInit {
  public form: Form = new Form({});
  public answer: Answer;
  public questions_answer: QuestionsAnswer;

  constructor(
    private formService: FormService,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.formService.get(params['id']).subscribe(data => {
          this.form = new Form(data);
          this.answer = new Answer({form_id: this.form.id});
          for (const question of this.form.questions) {
            this.answer.questions_answers.push(new QuestionsAnswer({question: question}));
          }
        });
      }
    });
  }

  onSubmit(f) {
    console.log(this.answer);
    this.answerService.create(this.answer).subscribe(data => {
      M.toast({html: 'Answer send with sucess 😁', classes: 'green', displayLength: 10000});
      this.answer = new Answer({form_id: this.form.id});
      for (const question of this.form.questions) {
        this.answer.questions_answers.push(new QuestionsAnswer({question: question}));
      }
    }, error => {
      M.toast({html: 'Problem in send answer ☹️', classes: 'red'});
    });
  }
}
