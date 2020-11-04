import { Component, Input, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

import { FormService } from 'src/app/shared/form.service';

import { Form } from 'src/app/shared/form.model';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  @Input() form: Form;

  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {
  }

  toggleEnable() {
    this.formService.update(this.form.id, this.form).subscribe(data => {
      if (this.form.enable) {
        M.toast({html: 'Form enabled 😁', classes: 'green'});
      } else {
        M.toast({html: 'Form disabled 😁', classes: 'green'});
      }
    }, error => {
      if (this.form.enable) {
        M.toast({html: 'Error in enable Form ☹️', classes: 'red'});
      } else {
        M.toast({html: 'Error in disable Form ☹️', classes: 'red'});
      }
    });
  }
}
