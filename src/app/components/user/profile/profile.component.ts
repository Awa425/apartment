import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,ReactiveFormsModule,MatFormFieldModule,MatRadioModule,
    MatInputModule,MatButtonModule,MatCardModule,MatTabsModule,MatIconModule,MatSelectModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  typeSelectionne: string | null = null;

  srcResult:any
  readonly labelPosition = model<'before' | 'after'>('after');
   user: any = {
    id: 1,
    firstName: 'Awa',
    lastName: 'Diop',
    email: 'diop@example.com',
    phone: '123-456-7890',
    role: 'Proprietaire',
    avatar: 'assets/images/properties/1.jpg'
  };
  profileFields = [
    { label: 'Prénom', key: 'firstName' },
    { label: 'Nom', key: 'lastName' },
    { label: 'Email', key: 'email' },
    { label: 'Téléphone', key: 'phone' },
    { label: 'Rôle', key: 'role' }
  ];
  appartementFields = [
    { label: 'Titre', type: 'text', placeholder: 'ex: Appartement moderne 3 pièces' },
    { label: 'Adresse', type: 'text' },
    { label: 'Superficie', type: 'number', placeholder: '0' },
    { label: 'Nombre de pièces', type: 'number' },
    { label: 'Étage', type: 'number' },
    { label: 'Mensualité', type: 'number' },
    { label: 'Caution', type: 'number' },
    { label: 'Date de Disponibilité', type: 'date' },
    { label: 'Durée du bail', type: 'text' }
  ];
  

  imagePreviews: string[] = [];

  onFileSelected(event: any) {
    const files = event.target.files;
  
    // Vérifier qu'il y a bien des fichiers
    if (!files || files.length === 0) {
      return;
    }
  
    // Vérifier si le nombre total dépasse 3 fichiers
    if (this.imagePreviews.length + files.length > 3) {
      alert("Vous pouvez sélectionner seulement 3 images.");
      return;
    }
  
    // Parcourir les nouveaux fichiers et les ajouter à la liste
    Array.from(files).forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  onSubmit() {
    console.log("Formulaire soumis !");
    // Tu peux envoyer les images et les autres données ici
  } 
  
  choisirType(type: string) {
    this.typeSelectionne = type;
  }
}
