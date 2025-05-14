import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getLandlordDashboardStats(): Observable<any> {


    // Récupérer les propriétés du propriétaire
    return this.http.get<any[]>(environment.apiUrl+'properties?ownerId').pipe(
      map(properties => {
        // Obtenir les statistiques pour chaque propriété
        const propertiesStats: any[] = properties.map(property => {
          return {
            propertyId: property.id,
            propertyTitle: property.title,
            views: property.views || 0,
            favorites: property.favorites || 0,
            inquiries: property.inquiries || 0,
            lastViewDate: property.lastViewDate || new Date()
          };
        });

        // Calculer les statistiques globales
        const totalViews = propertiesStats.reduce((sum, prop) => sum + prop.views, 0);
        const totalInquiries = propertiesStats.reduce((sum, prop) => sum + prop.inquiries, 0);
        
        // Trouver la propriété la plus consultée
        const mostViewedProperty = propertiesStats.reduce(
          (max, prop) => max.views > prop.views ? max : prop, 
          propertiesStats[0] || null
        );

        return {
          totalProperties: properties.length,
          totalViews,
          totalInquiries,
          averageViewsPerProperty: properties.length ? totalViews / properties.length : 0,
          mostViewedProperty,
          propertiesStats
        };
      })
    );
  }

    // Méthode pour enregistrer une vue sur une propriété
    recordPropertyView(propertyId: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/properties/${propertyId}`).pipe(
        map(property => {
          property.views = (property.views || 0) + 1;
          property.lastViewDate = new Date();
          return this.http.patch(`${this.apiUrl}/properties/${propertyId}`, { 
            views: property.views,
            lastViewDate: property.lastViewDate
          });
        })
      );
    }
}
