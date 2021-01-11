import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Client} from "../../models/client";



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public currentUserSubject = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }
  getUser(id: number): Observable<Client>{
    const url = environment.baseURL + 'client/' + id;
    return this.http.get<Client>(url);
  }

  getActualUser(): Observable<Client>{
    const url = environment.baseURL + 'client/';
    return this.http.get<Client>(url);
  }

  getUsers(): Observable<Client[]>{
    const url = environment.baseURL + 'clients';
    return this.http.get<Client[]>(url);
  }

  getUserP(page: number): Observable<Client[]>{
    const url = environment.baseURL + 'client?page=';
    return this.http.get<Client[]>(url);
  }
  // Update Balance and Favorites!
  updateClient(client: {}, id: number ): Observable<Client>{
    const url = environment.baseURL + 'clientupd/' + id;
    return this.http.put<Client>( url, client, environment.httpOptions);
  }

}
