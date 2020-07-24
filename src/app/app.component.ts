import { Component } from '@angular/core';
import { title } from 'process';
import{DetailsService} from './details.service';
import * as XLSX from 'xlsx';


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

  onFileChange(evt:any)
  {
    const target:DataTransfer = <DataTransfer>(evt.target);
    if(target.files.length!=1) throw Error('Cannot use multiple files');
    const reader: FileReader=new FileReader();
    reader.onload = (e: any) =>
    {

    };
  }
  
  // public getDetails()
  // {
  //   let resp = this.detail.getData();
  //   resp.subscribe((data) => this.subject=data);
  //   console.log(this.subject);
  // }

}
