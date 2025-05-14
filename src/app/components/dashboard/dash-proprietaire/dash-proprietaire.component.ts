import { Component } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Chart } from 'chart.js';
import { LandlordDashboardStats } from '../../models/dashboard-stats.model';

@Component({
  selector: 'app-dash-proprietaire',
  imports: [],
  templateUrl: './dash-proprietaire.component.html',
  styleUrl: './dash-proprietaire.component.scss'
})

export class DashProprietaireComponent {
  dashboardStats: LandlordDashboardStats | null = null;
  isLoading = true;
  viewsChart: any;
  propertiesChart: any;



  constructor(private dashboardService: DashboardService) {}

  loadDashboardData(): void {
    this.isLoading = true;
    this.dashboardService.getLandlordDashboardStats().subscribe({
      next: (stats) => {
        this.dashboardStats = stats;
        this.isLoading = false;
        
        // Une fois les données chargées, initialiser les graphiques
        setTimeout(() => {
          this.initViewsChart();
          this.initPropertiesChart();
        }, 100);
      },
      error: (error) => {
        console.error('Error loading dashboard data', error);
        this.isLoading = false;
      }
    });
  }

  initViewsChart(): void {
    if (!this.dashboardStats || !this.dashboardStats.propertiesStats.length) return;
    
    const ctx = document.getElementById('viewsChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    const labels = this.dashboardStats.propertiesStats.map(p => p.propertyTitle);
    const data = this.dashboardStats.propertiesStats.map(p => p.views);
    
    this.viewsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Nombre de vues par propriété',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  
  initPropertiesChart(): void {
    if (!this.dashboardStats || !this.dashboardStats.propertiesStats.length) return;
    
    const ctx = document.getElementById('propertiesChart') as HTMLCanvasElement;
    if (!ctx) return;
    
    const data = [
      this.dashboardStats.totalViews,
      this.dashboardStats.totalInquiries,
      this.dashboardStats.propertiesStats.reduce((sum, p) => sum + p.favorites, 0)
    ];
    
    this.propertiesChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Vues', 'Demandes', 'Favoris'],
        datasets: [{
          data: data,
          backgroundColor: [
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 206, 86, 0.5)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}
