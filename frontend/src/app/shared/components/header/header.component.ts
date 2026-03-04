import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 bg-white shadow-soft">
      <nav class="container-custom">
        <div class="flex items-center justify-between h-20">
          <a routerLink="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-br from-lilac to-lilac-dark rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">P</span>
            </div>
            <span class="text-xl font-bold text-lilac-dark">PESO Consultants</span>
          </a>

          <button (click)="toggleMenu()" class="md:hidden text-lilac-dark">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          <ul class="hidden md:flex items-center space-x-8">
            <li><a routerLink="/" routerLinkActive="text-lilac" [routerLinkActiveOptions]="{exact: true}" class="hover:text-lilac transition-colors">Home</a></li>
            <li><a routerLink="/about" routerLinkActive="text-lilac" class="hover:text-lilac transition-colors">About</a></li>
            <li><a routerLink="/industries" routerLinkActive="text-lilac" class="hover:text-lilac transition-colors">Industries</a></li>
            <li><a routerLink="/contact" routerLinkActive="text-lilac" class="hover:text-lilac transition-colors">Contact</a></li>
            <li><a routerLink="/contact" class="btn-primary text-sm py-2 px-6">Get Consultation</a></li>
          </ul>
        </div>

        <div *ngIf="isMenuOpen" class="md:hidden pb-4">
          <ul class="space-y-4">
            <li><a routerLink="/" (click)="toggleMenu()" class="block hover:text-lilac transition-colors">Home</a></li>
            <li><a routerLink="/about" (click)="toggleMenu()" class="block hover:text-lilac transition-colors">About</a></li>
            <li><a routerLink="/industries" (click)="toggleMenu()" class="block hover:text-lilac transition-colors">Industries</a></li>
            <li><a routerLink="/contact" (click)="toggleMenu()" class="block hover:text-lilac transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
