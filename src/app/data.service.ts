import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class DataService {

  baseUrl = "http://localhost:3000/api/";

  constructor(private http: Http) { }

  get(url)
  {
    return this.http.get(this.baseUrl + url).map(res=>{
      res.json()
    })
  }

  post(url,data)
  {
    return this.http.post(this.baseUrl + url,data).map(res=>{
      res.json()
    })
  }

  patch(url,id,data)
  {
    return this.http.patch(this.baseUrl + url + "/" + id,data).map(res=>{
      res.json()
    })
  }

  delate(url,id)
  {
    return this.http.get(this.baseUrl + url + "/" + id).map(res=>{
      res.json()
    })
  }

}
