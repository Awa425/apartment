import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../../models/apartment.interface';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { SendMessageModalComponent } from '../send-message-modal/send-message-modal.component';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ApartmentDetailComponent implements OnInit {
  apartment: any | null = null;
  today: string = new Date().toISOString().split('T')[0];
  currentImageIndex = 0;

  // Données statiques pour simuler un appartement
  private mockApartments: any[] = [
    {
      id: '1',
      title: 'Appartement Luxueux au Centre-Ville',
      description: 'Magnifique appartement moderne situé au cœur de la ville. Profitez d\'une vue imprenable sur la ville depuis le grand balcon. L\'appartement a été récemment rénové avec des finitions haut de gamme.',
      location: 'Centre-Ville, Dakar',
      price: 1500000,
      surface: 120,
      bedrooms: 3,
      localisation: 'assets/images/properties/maps.jpg',
      imageUrl: 'assets/images/properties/1.jpg',
      images: [
        'assets/images/properties/1.jpg',
        'assets/images/properties/2.jpg',
        'assets/images/properties/3.jpg'
      ],
      deposit: 3000000,
      minStay: 12,
      features: [
        'Cuisine entièrement équipée',
        'Climatisation centralisée',
        'Parking sécurisé',
        'Accès ascenseur',
        'Système de sécurité 24/7',
        'Internet haut débit'
      ]
    },
    {
      id: '2',
      title: 'Studio Modern aux Almadies',
      description: 'Studio moderne et confortable parfait pour les jeunes professionnels. Situé dans un quartier calme avec accès facile aux commerces et transports.',
      location: 'Almadies, Dakar',
      price: 800000,
      surface: 45,
      bedrooms: 1,
      imageUrl: 'assets/images/properties/2.jpg',
      deposit: 1600000,
      minStay: 6,
      images: [
        'assets/images/properties/1.jpg',
        'assets/images/properties/2.jpg',
        'assets/images/properties/3.jpg'
      ],
      features: [
        'Cuisine américaine',
        'Climatisation',
        'Balcon privé',
        'Accès piscine',
        'Salle de sport',
        'Wifi gratuit'
      ]
    }
  ];

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        this.loadApartment(id);
      }
    });
  }

  private loadApartment(id: string): void {
    // Simuler le chargement d'un appartement depuis les données statiques
    const apartment = this.mockApartments.find(apt => apt.id === id);
    if (apartment) {
      this.apartment = apartment;
    } else {
      console.error('Apartment not found');
      // Gérer le cas où l'appartement n'est pas trouvé
    }
  }

  openSendMessageModal(): void {
    this.dialog.open(SendMessageModalComponent, {
      width: '600px', 
    });
  }

  onBookNow(): void {
    if (this.apartment) {
      console.log('Booking apartment:', this.apartment.id);
      // Ajouter la logique de réservation ici
    }
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  nextImage(): void {
    if (this.apartment?.images) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.apartment.images.length;
    }
  }

  previousImage(): void {
    if (this.apartment?.images) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.apartment.images.length) % this.apartment.images.length;
    }
  }

  setCurrentImage(index: number): void {
    if (this.apartment?.images) {
      this.currentImageIndex = index;
    }
  }
}
