import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <div class="about-container">
      <mat-card class="about-card">
        <mat-card-header>
          <mat-card-title>About This Project</mat-card-title>
          <mat-card-subtitle>Angular Boilerplate</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>This is a modern Angular boilerplate project featuring:</p>
          <ul>
            <li>Responsive layout with left navigation</li>
            <li>Material Design components</li>
            <li>Standalone components</li>
            <li>Modern routing setup</li>
          </ul>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .about-card {
      margin-bottom: 20px;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin: 8px 0;
    }
  `]
})
export class AboutComponent {} 