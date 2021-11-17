import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  public url="http://localhost:8080/rest/api/";
  constructor(private http:HttpClient) { }

  allEnseignant(token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"allEnseignant",httpOptions);
  }

  getEnseignant(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"Enseignant/"+id,httpOptions);
  }

  addEnseignant(enseignant:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.post<any>(this.url+"addEnseignant",enseignant,httpOptions);
  }

  updateEnseignant(id:number,enseignant:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.put<any>(this.url+"Enseignant/"+id,enseignant,httpOptions);
  }

  deleteEnseignant(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.delete<any>(this.url+"Enseignant/"+id,httpOptions);
  }
}
