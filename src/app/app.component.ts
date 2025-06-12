import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LeftNavComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
      <div class="app-container">
          <mat-toolbar color="primary" class="toolbar flex items-center">
              <ng-container *ngIf="isHandset$ | async; else desktopMenu">
                  <button mat-icon-button *ngIf="!sidenav.opened" (click)="sidenav.toggle()">
                      <mat-icon>menu</mat-icon>
                  </button>
                  <button mat-icon-button *ngIf="sidenav.opened" (click)="sidenav.close()">
                      <span class="text-2xl">✕</span>
                  </button>
              </ng-container>
              <ng-template #desktopMenu>
                  <button mat-icon-button (click)="sidenav.toggle()">
                      <mat-icon>menu</mat-icon>
                  </button>
              </ng-template>
              <span class="ml-2 flex-1">Angular Boilerplate</span>
          </mat-toolbar>

          <mat-sidenav-container class="sidenav-container">
              <mat-sidenav #sidenav
                           [mode]="(isHandset$ | async) ? 'over' : 'side'"
                           [opened]="!(isHandset$ | async)"
                           class="sidenav">
                  <div class="relative w-full h-full">

                      <app-left-nav></app-left-nav>
                  </div>
              </mat-sidenav>

              <mat-sidenav-content class="content">
                  <router-outlet></router-outlet>
              </mat-sidenav-content>
          </mat-sidenav-container>
      </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }

    .toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }

    .sidenav-container {
      flex: 1;
      margin-top: 64px; /* Height of toolbar */
      overflow: hidden;
    }

    .sidenav {
      width: 250px;
      background-color: #fafafa;
      overflow-x: hidden;
    }

    .content {
      padding: 20px;
      background-color: #f5f5f5;
      min-height: calc(100vh - 64px);
      overflow-x: hidden;
    }

    @media (max-width: 599px) {
      .sidenav-container {
        margin-top: 56px; /* Height of toolbar on mobile */
      }
      .content {
        min-height: calc(100vh - 56px);
      }
    }
  `],
  providers: [
    { provide: MatSidenav, useExisting: MatSidenav }
  ]
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }
}
