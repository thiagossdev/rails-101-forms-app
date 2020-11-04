import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormService } from '../../shared/form.service';
import { Form } from '../../shared/form.model';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {
  public form: Form = new Form({primary_color: '#9702AB', enable: false});

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.formService.get(params['id']).subscribe(data => {
          this.form = new Form(data);
        });
      }
    });
  }
}
