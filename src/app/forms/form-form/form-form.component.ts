import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css/dist/js/materialize';

import { FormService } from '../../shared/form.service';
import { Form } from '../../shared/form.model';

@Component({
  selector: 'app-form-form',
  templateUrl: './form-form.component.html',
  styleUrls: ['./form-form.component.scss']
})
export class FormFormComponent implements OnInit {
  @Input() public form: Form;

  constructor(
    private formService: FormService,
    private router: Router
  ) { }

  ngOnInit() { }

  onSubmit(f) {
    if (this.form.id) {
      this.formService.update(this.form.id, this.form).subscribe(data => {
        M.toast({html: 'Form updated 😁', classes: 'green'});
      }, error => {
        M.toast({html: 'Problem in Form creation', classes: 'red'});
      });
    } else {
      this.formService.create(this.form).subscribe(data => {
        this.router.navigate(['/forms/' + data['slug']]);
      }, error => {
        M.toast({html: 'Problem in Form creation ☹️', classes: 'red'});
      });
    }
  }
}
