import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  public url="http://localhost:8080/rest/api/";

  constructor(private http:HttpClient) { }

  allGroupe(token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"allGroupe",httpOptions);
  }

  getGroupe(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"Groupe/"+id,httpOptions);
  }

  addGroupe(groupe:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.post<any>(this.url+"addGroupe",groupe,httpOptions);
  }

  updateGroupe(id:number,groupe:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.put<any>(this.url+"Groupe/"+id,groupe,httpOptions);
  }

  deleteGroupe(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.delete<any>(this.url+"Groupe/"+id,httpOptions);
  }
}
