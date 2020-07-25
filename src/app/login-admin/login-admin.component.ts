import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../details.service'

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(public details:DetailsService) { }

  ngOnInit(): void {
  }

  login()
  {
    let resp = this.details.form.value;

    if(resp.email=='abc@gmail.com' && resp.pass=='1234')
    {
      
    }
    else{
      alert('Incorrect login details');
    }
    
    // console.log(resp.email);
    // console.log(resp.pass);
    // this.http.get<subject>(this.rootURL+'/2');
  }

}
