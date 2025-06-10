import { Injectable } from '@angular/core';
import { Property } from './property.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appartement } from '../models/apartment.interface';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
 private apiUrl = 'http://localhost:3000/properties'; 

   constructor(private http: HttpClient) {}

   createAppartement(bien: Appartement): Observable<Appartement> {
     return this.http.post<Appartement>(this.apiUrl, bien);
   }


}
