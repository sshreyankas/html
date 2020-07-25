import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName } from "@angular/forms";
import {DetailsService} from '../details.service'
import {HttpClient} from '@angular/common/http';

interface subject{
  cno:number;
  pass:String;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rootURL = 'http://localhost:8080/Check12/rest/login';

  form = new FormGroup({
    email:new FormControl(''),
    pass: new FormControl('')
  })

  constructor(private http:HttpClient, public details:DetailsService) { 
  
  }

  ngOnInit(): void {
    
  }

  login()
  {
    let resp = this.details.form.value;

    this.details.check(resp, 'Student');
    // console.log(resp.email);
    // console.log(resp.pass);
    // this.http.get<subject>(this.rootURL+'/2');
  }

}
