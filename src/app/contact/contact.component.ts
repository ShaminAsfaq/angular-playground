import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  template: `
    <div class="contact-container">
      <mat-card class="contact-card">
        <mat-card-header>
          <mat-card-title>Contact Us</mat-card-title>
          <mat-card-subtitle>Get in touch with us</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <form class="contact-form">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Name</mat-label>
              <input matInput placeholder="Your name">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input matInput placeholder="Your email" type="email">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Message</mat-label>
              <textarea matInput placeholder="Your message" rows="4"></textarea>
            </mat-form-field>

            <button mat-raised-button color="primary">Send Message</button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .contact-card {
      margin-bottom: 20px;
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .full-width {
      width: 100%;
    }
  `]
})
export class ContactComponent {} 