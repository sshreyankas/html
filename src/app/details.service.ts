import { Injectable, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Subject} from './subject'
import { FormControl, FormGroup, FormControlName } from "@angular/forms";

import { from, Subject } from 'rxjs';

interface subject{

}

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  flag:String;
  private baseUrl: string = '/rest/messages';
  rootURL = 'http://localhost:8080/Check12/rest/login';

  obj:any;
  subject:any;
  form = new FormGroup({
    email:new FormControl(''),
    pass: new FormControl('')
  })
  constructor(private http: HttpClient) { }

  check(data,who)
  {
    // let resp = this.form.value;
    console.log(data.email);
    console.log(data.pass);
    this.obj = this.http.get(this.rootURL+'?who='+who+'?cno='+data.cno+'&pass='+data.pass);
    this.flag = JSON.parse(this.obj);
    if(this.flag=='1')
    {
      console.log('correct') ;
    }
    else{
      alert('Incorrect login details');
    }
    // this.http.get<subject>(this.rootURL+'/2');
  }

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
