import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

import { FormService } from '../../shared/form.service';

import { Form } from 'src/app/shared/form.model';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  public forms: Form[] = [];

  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.formService.list().subscribe((data: Object[]) => {
      for (const form of data){
        this.forms.push(new Form(form));
      }
    });
  }

  deleteForm(form): boolean {
    if (confirm('Your want delete this form?')) {
      this.formService.destroy(form.id).subscribe((data) => {
        const index = this.forms.indexOf(form);
        this.forms.splice(index, 1);
        M.toast({html: 'Form deleted 😁', classes: 'green'});
      }, error => {
        M.toast({html: `Error in delete Form ${form.title} ☹️`, classes: 'red'});
      });
    }
    return false;
  }
}
