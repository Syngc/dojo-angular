import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
@Injectable()
export class GithubService {

  constructor(public _http:Http) {   }
  apiLink:any ='https://api.github.com/users/';
  public get(name : string): Observable<any>{
    var link: string = this.apiLink + name;
    return this._http.get(link).map((response) => response.json());
  }
}
