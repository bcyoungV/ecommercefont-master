import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  public url="http://localhost:8080/rest/api/";
  constructor(private http:HttpClient) { }

  allMatiere(token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"allMatiere",httpOptions);
  }

  getMatiere(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"Matiere/"+id,httpOptions);
  }

  addMatiere(matiere:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.post<any>(this.url+"addMatiere",matiere,httpOptions);
  }

  updateMatiere(id:number,matiere:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.put<any>(this.url+"Matiere/"+id,matiere,httpOptions);
  }

  deleteMatiere(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.delete<any>(this.url+"Matiere/"+id,httpOptions);
  }
}
