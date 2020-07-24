import { Injectable, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Subject} from './subject'
import { from } from 'rxjs';

interface subject{
  cno:number;
  batch:String;
}
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private baseUrl: string = '/rest/messages';
  
  rootURL = 'http://localhost:8080/Check12/rest/result';

  constructor(private http: HttpClient) { }

  public getData()
  {
    // return this.http.get("http:localhost:8080/Result1/rest/messages");
    // return this.http.jsonp(this.rootURL+'/2', 'callback');
     return this.http.get<subject>(this.rootURL+'/2');
    //  .subscribe(data =>
    //  {
    //    console.log(data.cno);
    //    console.log(data.batch);
    //  }
    //  );
  }

  

  
}
