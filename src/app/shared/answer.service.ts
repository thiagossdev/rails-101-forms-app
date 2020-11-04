import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private resource = 'answers';

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

  list(form_id) {
    return this.http.get(this.resource_path(), {params: {form_id: form_id}});
  }
 
  get(answer_id) {
    return this.http.get(this.resource_path(answer_id));
  }
 
  create(answer_params) {
    return this.http.post(this.resource_path(), answer_params);
  }
 
  update(answer_id, answer_params) {
    return this.http.put(this.resource_path(answer_id), answer_params);
  }
 
  destroy(answer_id) {
    return this.http.delete(this.resource_path(answer_id));
  }
}
