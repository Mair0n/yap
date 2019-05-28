import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

import { DataService } from '../types/animals-data-service.interface';

import { Dependences } from '../types/animal';

import { SERVER_URI } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AnimalsDataService implements DataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  get<T>(path: string): Observable<T[]> {
    return this.http.get<T[]>(`${SERVER_URI}/${path}`);
  }

  getAnimalDependences<Dependences>(path: string): Observable<Dependences> {
    return this.http.get<Dependences>(`${SERVER_URI}/${path}`);
  }

  save<T>(path: string, data: T): Observable<T> {
    return this.http.put<T>(`${SERVER_URI}/${path}`, data, this.httpOptions);
  }

  delete<T>(path: string, name: string): Observable<T> {
    return this.http.delete<T>(`${SERVER_URI}/${path}/${name}`, this.httpOptions);
  }
}
