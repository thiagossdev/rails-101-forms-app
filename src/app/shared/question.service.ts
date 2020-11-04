import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private resource = 'questions';

  constructor(
    private tokenService: AngularTokenService,
    private http: HttpClient
  ) { }

  resource_path(...path) {
    path = [
      this.tokenService.tokenOptions.apiBase,
      this.tokenService.tokenOptions.apiPath,
      this.resource
    ].concat(path);
    return path.join('/');
  }
 
  create(form_id, question_params) {
    return this.http.post(this.resource_path(), { form_id: form_id, question: question_params });
  }
 
  update(question_id, question_params) {
    return this.http.put(this.resource_path(question_id), question_params);
  }
 
  destroy(question_id) {
    return this.http.delete(this.resource_path(question_id));
  }
}
