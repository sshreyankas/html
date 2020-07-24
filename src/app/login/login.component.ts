import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName } from "@angular/forms";

import {HttpClient} from '@angular/common/http';

interface subject{
  cno:number;
  batch:String;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  pass:String;
  rootURL = 'http://localhost:8080/Check12/rest/login';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  

  form = new FormGroup({
    name:new FormControl(''),
    pass: new FormControl('')
  })

  check()
  {
    this.http.get<subject>(this.rootURL+'/2');
  }

}
