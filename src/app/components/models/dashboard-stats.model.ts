// models/dashboard-stats.model.ts
export interface PropertyStats {
    propertyId: string;
    propertyTitle: string;
    views: number;
    favorites: number;
    inquiries: number;
    lastViewDate: Date;
  }
  
  export interface LandlordDashboardStats {
    totalProperties: number;
    totalViews: number;
    totalInquiries: number;
    averageViewsPerProperty: number;
    mostViewedProperty: PropertyStats;
    propertiesStats: PropertyStats[];
    // Autres statistiques pertinentes
  }