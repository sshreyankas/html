import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private baseUrl: string = '/rest/messages';
  
  constructor(private http: HttpClient) { }

  public getData()
  {
    return this.http.get("http://localhost:8080/Result1/rest/messages")
    ;
    
  }
}
