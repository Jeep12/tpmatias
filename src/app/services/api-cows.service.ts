import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cow } from '../Utils/Cow';

@Injectable({
  providedIn: 'root'
})
export class ApiCowsService {
  private url = 'https://6668e7f32e964a6dfed33b06.mockapi.io/cows'; // URL de la API

  constructor(private http: HttpClient) { 
    
  }
  getData(): Observable<Cow[]> {
    return this.http.get<Cow[]>(this.url);
  }

  deleteCow(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
  addCow(newCow: Cow): Observable<Cow> {
    return this.http.post<Cow>(this.url, newCow);
  }
  
}
