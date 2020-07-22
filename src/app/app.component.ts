import { Component } from '@angular/core';
import { title } from 'process';
import{DetailsService} from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
  subject: any;

  constructor(private detail: DetailsService){
    let resp = this.detail.getData();
    resp.subscribe((data) => this.subject=data);
    console.log(this.subject);
  }

  
  public getDetails()
  {
    let resp = this.detail.getData();
    resp.subscribe((data) => this.subject=data);
    console.log(this.subject);
  }

}
