import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstants';

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  constructor(private httpClient : HttpClient) { }


  fetchBlogs(): Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.API_URL}/blogs`);
  }
  fetchBlog(slug:String): Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.API_URL}/blog/slug`);
  }
}
