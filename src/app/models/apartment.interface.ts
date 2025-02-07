export interface Apartment {
  id: string;
  title: string;
  description: string;
  price: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    area: number; // in square feet/meters
    furnished: boolean;
    parking: boolean;
    petsAllowed: boolean;
  };
  images: string[]; // URLs of images
  amenities: string[];
  availableFrom: Date;
  landlord: {
    id: string;
    name: string;
    phone: string;
    email: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
