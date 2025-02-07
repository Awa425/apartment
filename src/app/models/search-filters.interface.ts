export interface SearchFilters {
  priceRange: {
    min: number;
    max: number;
  };
  location: {
    city?: string;
    state?: string;
    zipCode?: string;
    radius?: number; // Search radius in kilometers/miles
  };
  features: {
    minBedrooms?: number;
    minBathrooms?: number;
    minArea?: number;
    furnished?: boolean;
    parking?: boolean;
    petsAllowed?: boolean;
  };
  amenities?: string[];
  availableFrom?: Date;
  sortBy?: 'price' | 'date' | 'relevance';
  sortOrder?: 'asc' | 'desc';
}
