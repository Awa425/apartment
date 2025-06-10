import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClient } from '@angular/common/http';
import { Appartement } from '../../../models/apartment.interface';
import { ApartmentService } from '../../../services/apartment.service';
import { Router } from '@angular/router';
import { successAlert, wrongAlert } from '../../../shared/response-alert';
import { ApartmentFormComponent } from '../../apartment-form/apartment-form.component';

@Component({
  selector: 'app-profile',
   standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,MatFormFieldModule,MatRadioModule,
    MatInputModule,MatButtonModule,MatCardModule,MatTabsModule,MatIconModule,MatSelectModule, ApartmentFormComponent
  ],
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
   bienForm: FormGroup;
  imagePreviews: string[] = [];
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
  
  constructor( private fb: FormBuilder, private apartmentService:ApartmentService, private router: Router  ){
     this.bienForm = this.fb.group({
    titre: ['', Validators.required],
    adresse: ['',],
    type_ap: ['',],
    superficie: ['',],
    nombre_piece: [''],
    etage: ['',],
    mensualite: ['',],
    caution: ['',],
    date_dispo: ['',],
    duree_bail: ['',],
    meuble: ['',],
    photo: [[],],
        });
  }

  onFileSelected(event: any) {
    const files = event.target.files;
      if (!files || files.length === 0) {
      return;
    }
  
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
    
    if (this.bienForm.invalid) {
        return;
    }

    const appartement: any = {
      titre: this.bienForm.value.titre,
      adresse: this.bienForm.value.adresse,
      type_ap: this.bienForm.value.type_ap,
      superficie: this.bienForm.value.superficie,
      nombre_piece: this.bienForm.value.nombre_piece,
      etage: this.bienForm.value.etage,
      mensualite: this.bienForm.value.mensualite,
      caution: this.bienForm.value.caution,
      date_dispo: this.bienForm.value.date_dispo,
      duree_bail: this.bienForm.value.duree_bail,
      meuble: this.bienForm.value.meuble,
      photo: this.imagePreviews,
    };
    console.warn(appartement);
    
    this.apartmentService.createAppartement(appartement).subscribe(response=>{  
         successAlert('Bien enregistre avec success');
         this.router.navigate(['/home'])     
    },
     (error) => {       
        wrongAlert("Erreur lors de l'enregistrement");
    }
  )
    
  } 
  
  choisirType(type: string) {
    this.typeSelectionne = type;
  }
}
