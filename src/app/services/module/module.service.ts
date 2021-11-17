import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  public url="http://localhost:8080/rest/api/";
  constructor(private http:HttpClient) { }

  allModule(token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"allModule",httpOptions);
  }

  getModule(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"Module/"+id,httpOptions);
  }

  addModule(module:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.post<any>(this.url+"addModule",module,httpOptions);
  }

  updateModule(id:number,module:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.put<any>(this.url+"Module/"+id,module,httpOptions);
  }

  deleteModule(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.delete<any>(this.url+"Module/"+id,httpOptions);
  }
}
