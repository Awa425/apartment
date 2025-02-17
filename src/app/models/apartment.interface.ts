export interface Apartment {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  price: number;
  area: number;
  features: string[];
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  agent: {
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
  availability: string;
  yearBuilt: number;
  parkingSpots: number;
  petsAllowed: boolean;
  furnished: boolean;
  utilities: string[];
  nearbyPlaces: {
    name: string;
    type: string;
    distance: string;
  }[];
}
