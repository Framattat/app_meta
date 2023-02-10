import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http:HttpClient) { }

  //TODO CONNESSIONE AL DB META
  //TODO CONNESSIONE ALL'API STARWARS
}
