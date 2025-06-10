import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Property {
  id?: number;
  title: string;
  address: string;
  type: string;
  surface: number;
  rooms: number;
  floor: number;
  monthlyRent: number;
  deposit: number;
  availabilityDate: string;
  leaseDuration: string;
  images: string[];
  description?: string;
  amenities?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:3000/properties'; // URL de json-server

  constructor(private http: HttpClient) {}

  createProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.apiUrl, property);
  }

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl);
  }

  getProperty(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/${id}`);
  }

  updateProperty(id: number, property: Property): Observable<Property> {
    return this.http.put<Property>(`${this.apiUrl}/${id}`, property);
  }

  deleteProperty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
