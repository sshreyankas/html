import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../details.service'
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

interface subject{
  cno:number;
  pass:String;
}

@Component({
  selector: 'app-login-staff',
  templateUrl: './login-staff.component.html',
  styleUrls: ['./login-staff.component.css']
})
export class LoginStaffComponent implements OnInit {

  obj: any;
  constructor(public details:DetailsService, private http:HttpClient) { }

  rootURL = 'http://localhost:8080/Check12/rest/login';

  ngOnInit(): void {
  }

  login()
  {
    let resp = this.details.form.value;

    this.details.check(resp,'Staff');
    // console.log(resp.email);
    // console.log(resp.pass);
    
  }

}
