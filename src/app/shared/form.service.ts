import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private resource = 'forms';

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

  list() {
    return this.http.get(this.resource_path());
  }
 
  get(form_id) {
    return this.http.get(this.resource_path(form_id));
  }
 
  create(form_params) {
    return this.http.post(this.resource_path(), form_params);
  }
 
  update(form_id, form_params) {
    return this.http.put(this.resource_path(form_id), form_params);
  }
 
  destroy(form_id) {
    return this.http.delete(this.resource_path(form_id));
  }
}
