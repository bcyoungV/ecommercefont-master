import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Etudiant } from 'src/app/models/etudiant-model';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  public url="http://localhost:8080/rest/api/";
  constructor(private http:HttpClient) { }

  allEtudiant(token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"allEtudiant",httpOptions);
  }

  getEtudiant(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"Etudiant/"+id,httpOptions);
  }

  addEtudiant(etudiant:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.post<Etudiant>(this.url+"addEtudiant",etudiant,httpOptions);
  }

  updateEtudiant(id:number,etudiant:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.put<any>(this.url+"Etudiant/"+id,etudiant,httpOptions);
  }

  deleteEtudiant(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.delete<any>(this.url+"Etudiant/"+id,httpOptions);
  }
}
