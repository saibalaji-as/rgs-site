import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LogoComponent],
  template: `
    <header class="sticky top-0 z-50 bg-white shadow-soft">
      <nav class="container-custom">
        <div class="flex items-center justify-between h-20">
          <a routerLink="/" class="flex items-center space-x-3">
            <!-- <app-logo [size]="'sm'" [color]="'#6A4C93'" /> -->
            <div class="flex flex-col">
              <span class="text-3xl font-bold text-lilac-dark" style="font-family: Georgia, serif;">G Samuel & Co</span>
              <span class="text-s text-gray-600">PESO Licensing & Certification</span>
            </div>
          </a>

          <button 
            (click)="toggleMenu()" 
            class="md:hidden text-lilac-dark p-2 rounded-lg hover:bg-lilac-light/20 transition-all duration-300 relative z-50"
            [attr.aria-label]="isMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <svg 
              class="w-7 h-7 transition-transform duration-300" 
              [class.rotate-90]="isMenuOpen"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                *ngIf="!isMenuOpen"
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                *ngIf="isMenuOpen"
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d="M6 18L18 6M6 6l12 12"
              />
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

        <!-- Mobile Menu Overlay -->
        <div 
          *ngIf="isMenuOpen" 
          class="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40 transition-opacity duration-300"
          (click)="toggleMenu()"
        ></div>

        <!-- Mobile Menu Dropdown -->
        <div 
          *ngIf="isMenuOpen" 
          class="md:hidden fixed left-0 right-0 top-20 bg-white shadow-2xl rounded-b-3xl overflow-hidden z-40 animate-slideDown"
          style="animation: slideDown 0.3s ease-out;"
        >
          <div class="bg-gradient-to-br from-lilac/5 to-lilac-light/10 px-6 py-8">
            <ul class="space-y-2">
              <li class="transform transition-all duration-200 hover:translate-x-2">
                <a 
                  routerLink="/" 
                  routerLinkActive="bg-lilac text-white"
                  [routerLinkActiveOptions]="{exact: true}"
                  (click)="toggleMenu()" 
                  class="flex items-center space-x-4 p-4 rounded-xl hover:bg-lilac hover:text-white transition-all duration-200 group"
                >
                  <span class="text-2xl">🏠</span>
                  <span class="font-medium text-lg">Home</span>
                </a>
              </li>
              <li class="transform transition-all duration-200 hover:translate-x-2">
                <a 
                  routerLink="/about" 
                  routerLinkActive="bg-lilac text-white"
                  (click)="toggleMenu()" 
                  class="flex items-center space-x-4 p-4 rounded-xl hover:bg-lilac hover:text-white transition-all duration-200 group"
                >
                  <span class="text-2xl">ℹ️</span>
                  <span class="font-medium text-lg">About Us</span>
                </a>
              </li>
              <li class="transform transition-all duration-200 hover:translate-x-2">
                <a 
                  routerLink="/industries" 
                  routerLinkActive="bg-lilac text-white"
                  (click)="toggleMenu()" 
                  class="flex items-center space-x-4 p-4 rounded-xl hover:bg-lilac hover:text-white transition-all duration-200 group"
                >
                  <span class="text-2xl">🏭</span>
                  <span class="font-medium text-lg">Industries</span>
                </a>
              </li>
              <li class="transform transition-all duration-200 hover:translate-x-2">
                <a 
                  routerLink="/contact" 
                  routerLinkActive="bg-lilac text-white"
                  (click)="toggleMenu()" 
                  class="flex items-center space-x-4 p-4 rounded-xl hover:bg-lilac hover:text-white transition-all duration-200 group"
                >
                  <span class="text-2xl">📞</span>
                  <span class="font-medium text-lg">Contact</span>
                </a>
              </li>
            </ul>
            
            <!-- CTA Button in Mobile Menu -->
            <div class="mt-6 pt-6 border-t border-lilac/20">
              <a 
                routerLink="/contact" 
                (click)="toggleMenu()" 
                class="flex items-center justify-center space-x-3 bg-gradient-to-r from-lilac to-lilac-dark text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <span class="text-xl">💼</span>
                <span>Get Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <style>
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  `
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
