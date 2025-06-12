import { Component, Inject } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-left-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatNavList,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MatIconModule
  ],
  template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/home" routerLinkActive="active-link" (click)="onItemClick()">
        <span matListItemIcon>
          <mat-icon>home</mat-icon>
        </span>
        <span matListItemTitle>Home</span>
      </a>
      <a mat-list-item routerLink="/about" routerLinkActive="active-link" (click)="onItemClick()">
        <span matListItemIcon>
          <mat-icon>info</mat-icon>
        </span>
        <span matListItemTitle>About</span>
      </a>
      <a mat-list-item routerLink="/contact" routerLinkActive="active-link" (click)="onItemClick()">
        <span matListItemIcon>
          <mat-icon>contact_mail</mat-icon>
        </span>
        <span matListItemTitle>Contact</span>
      </a>
    </mat-nav-list>
  `,
  styles: [`
    :host {
      display: block;
      padding: 16px 0;
      overflow-x: hidden;
      width: 100%;
    }

    mat-nav-list {
      padding-top: 0;
      width: 100%;
    }

    a {
      margin: 4px 8px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      width: calc(100% - 16px);
    }

    .active-link {
      background-color: rgba(0, 0, 0, 0.04);
      color: #1976d2;
    }

    mat-icon {
      margin-right: 16px;
    }
  `]
})
export class LeftNavComponent {
  constructor(
    @Inject(MatSidenav) private sidenav: MatSidenav,
    private breakpointObserver: BreakpointObserver
  ) {}

  onItemClick() {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(map(result => result.matches))
      .subscribe(isHandset => {
        if (isHandset) {
          this.sidenav.close();
        }
      });
  }
}
