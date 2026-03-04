import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-lilac-dark text-white">
      <div class="container-custom py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">PESO Consultants</h3>
            <p class="text-lilac-light text-sm">Your trusted partner for PESO licensing and industrial compliance solutions across India.</p>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li><a routerLink="/" class="text-lilac-light hover:text-white transition-colors">Home</a></li>
              <li><a routerLink="/about" class="text-lilac-light hover:text-white transition-colors">About Us</a></li>
              <li><a routerLink="/industries" class="text-lilac-light hover:text-white transition-colors">Industries</a></li>
              <li><a routerLink="/contact" class="text-lilac-light hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-sm">
              <li><a routerLink="/services/petroleum-license" class="text-lilac-light hover:text-white transition-colors">Petroleum License</a></li>
              <li><a routerLink="/services/explosives-license" class="text-lilac-light hover:text-white transition-colors">Explosives License</a></li>
              <li><a routerLink="/services/gas-cylinder-license" class="text-lilac-light hover:text-white transition-colors">Gas Cylinder License</a></li>
              <li><a routerLink="/services/smpv-license" class="text-lilac-light hover:text-white transition-colors">SMPV(U) License</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Contact Info</h4>
            <ul class="space-y-2 text-sm text-lilac-light">
              <li>📧 info&#64;pesoconsultants.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 Pan India Coverage</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-lilac mt-8 pt-8 text-center text-sm text-lilac-light">
          <p>&copy; 2024 PESO Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
