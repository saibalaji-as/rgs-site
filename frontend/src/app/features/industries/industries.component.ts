import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="bg-gradient-to-br from-lilac to-lilac-light text-white py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
        <p class="text-xl text-lilac-light">Specialized licensing solutions for diverse industrial sectors</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let industry of industries" class="card group hover:border-lilac border-2 border-transparent transition-all">
            <div class="text-5xl mb-4">{{ industry.icon }}</div>
            <h3 class="text-xl font-bold text-lilac-dark mb-3">{{ industry.name }}</h3>
            <p class="text-gray-600 mb-4">{{ industry.description }}</p>
            <a routerLink="/contact" class="text-lilac font-semibold hover:text-lilac-dark transition-colors inline-flex items-center">
              Get Started
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class IndustriesComponent {
  industries = [
    {
      icon: '⛽',
      name: 'Petroleum Retail Outlets',
      description: 'Licensing support for fuel stations, petrol pumps, and retail petroleum outlets'
    },
    {
      icon: '🏭',
      name: 'LPG Bottling Plants',
      description: 'Complete compliance solutions for LPG bottling and distribution facilities'
    },
    {
      icon: '🧪',
      name: 'Chemical Industries',
      description: 'PESO licensing for chemical manufacturing and storage units'
    },
    {
      icon: '💥',
      name: 'Fireworks & Explosives Units',
      description: 'Expert consultancy for explosives manufacturing and fireworks industries'
    },
    {
      icon: '🔥',
      name: 'Gas Storage & Warehousing',
      description: 'Gas cylinder rules compliance and storage facility licensing'
    },
    {
      icon: '🏗️',
      name: 'Manufacturing Units',
      description: 'Industrial licensing for manufacturing facilities using hazardous materials'
    },
    {
      icon: '⚗️',
      name: 'Pharmaceutical Industries',
      description: 'Poison and prohibited substances licensing for pharma companies'
    },
    {
      icon: '🚛',
      name: 'Transportation & Logistics',
      description: 'SMPV licensing for pressure vessel transportation companies'
    },
    {
      icon: '⚡',
      name: 'Power & Energy Sector',
      description: 'Compliance solutions for power plants and energy facilities'
    }
  ];
}
