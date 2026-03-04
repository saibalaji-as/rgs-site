import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'logo-wrapper ' + sizeClass">
      <!-- Placeholder: Replace with actual logo image -->
      <img *ngIf="!colorFilter" src="assets/images/logo.png" [alt]="alt" [style.filter]="colorFilter">
      <img *ngIf="colorFilter" src="assets/images/logo-invert.png" [alt]="alt" [style.filter]="colorFilter">
    </div>
  `,
  styles: [`
    .logo-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    .logo-svg {
      display: block;
    }
    
    img {
      display: block;
      width: 100%;
      height: auto;
    }
    
    .size-sm { width: 45px; }
    .size-sm .logo-svg { width: 45px; height: 56px; }
    
    .size-md { width: 70px; }
    .size-md .logo-svg { width: 70px; height: 88px; }
    
    .size-lg { width: 100px; }
    .size-lg .logo-svg { width: 100px; height: 125px; }
    
    .size-xl { width: 150px; }
    .size-xl .logo-svg { width: 150px; height: 188px; }
  `]
})
export class LogoComponent {
  @Input() color: string = '#6A4C93';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() alt: string = 'G Samuel & Co Logo';
  @Input() invertColor: boolean = false;
  
  get sizeClass(): string {
    return `size-${this.size}`;
  }
  
  get colorFilter(): boolean {
    return this.invertColor;
  }
}

