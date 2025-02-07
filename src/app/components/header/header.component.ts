import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage: Language = {
    code: 'fr',
    name: 'Français',
    flag: 'assets/images/flags/lang.png'
  };

  languages: Language[] = [
    {
      code: 'en',
      name: 'English',
      flag: 'assets/images/flags/lang.png'
    },
    {
      code: 'fr',
      name: 'Français',
      flag: 'assets/images/flags/lang.png'
    }
  ];

  changeLanguage(lang: Language) {
    this.currentLanguage = lang;
  }
}
