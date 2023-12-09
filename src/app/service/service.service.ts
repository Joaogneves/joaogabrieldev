import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private url = environment.api;
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<any[]>(this.url);
  }
}
