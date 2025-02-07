export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'tenant' | 'landlord' | 'admin';
  favorites: string[]; // Array of apartment IDs
  searchHistory: {
    query: string;
    timestamp: Date;
  }[];
  notifications: {
    id: string;
    message: string;
    read: boolean;
    createdAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
