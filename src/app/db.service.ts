import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http:HttpClient) { }

  public post(url:string, endpoint: string, body: any): Observable<string> {
    console.log("Sono su dbservice, metodo post, URL completa: "+ url + endpoint + "\nbody: ", body);
    var header = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
    return this.http.post<string>(url + endpoint, body, {headers: header});
  }
  //TODO CONNESSIONE ALL'API STARWARS
  public get(url:string, endpoint: string): Observable<string> {
    console.log("Sono su dbservice, metodo get, URL completa: "+ url + endpoint);
    var header = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
    return this.http.get<string>(url + endpoint, {headers: header});
  }
}
