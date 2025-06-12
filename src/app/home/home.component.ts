import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <div class="home-container">
      <mat-card class="welcome-card">
        <mat-card-header>
          <mat-card-title>Welcome to Angular Boilerplate</mat-card-title>
          <mat-card-subtitle>A modern, responsive template</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>This is a sample home page with a modern Material Design layout.</p>
          <p>Use the navigation menu on the left to explore different sections.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .welcome-card {
      margin-bottom: 20px;
    }
  `]
})
export class HomeComponent {}
