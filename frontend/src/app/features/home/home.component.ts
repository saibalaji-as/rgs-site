import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LeadFormComponent } from '../../shared/components/lead-form/lead-form.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LeadFormComponent, LogoComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  services = [
    {
      icon: '⛽',
      title: 'PESO Petroleum License',
      description: 'Complete assistance for petroleum storage and retail outlet licensing',
      slug: 'petroleum-license'
    },
    {
      icon: '💥',
      title: 'Explosives License',
      description: 'Expert consultancy for explosives manufacturing and storage permits',
      slug: 'explosives-license'
    },
    {
      icon: '🔥',
      title: 'Gas Cylinder License',
      description: 'Gas cylinder rules compliance and licensing support',
      slug: 'gas-cylinder-license'
    },
    {
      icon: '🚛',
      title: 'SMPV(U) License',
      description: 'Static and mobile pressure vessel licensing services',
      slug: 'smpv-license'
    },
    {
      icon: '⚠️',
      title: 'Prohibition & Poison License',
      description: 'Licensing for prohibited and poisonous substances',
      slug: 'poison-license'
    },
    {
      icon: '🌐',
      title: 'Import/Export PESO Approval',
      description: 'International trade compliance and PESO approvals',
      slug: 'import-export-approval'
    }
  ];

  whyChooseUs = [
    { icon: '📅', title: '15+ Years Experience', count: 15 },
    { icon: '✅', title: '500+ Projects Delivered', count: 500 },
    { icon: '🎯', title: '100% Regulatory Compliance', count: 100 },
    { icon: '🇮🇳', title: 'Pan India Coverage', count: 28 },
    { icon: '👨‍💼', title: 'Dedicated Licensing Experts', count: 50 },
    { icon: '⚡', title: 'Faster Approval Processing', count: 30 }
  ];

  process = [
    { step: 1, title: 'Initial Consultation', description: 'Understanding your requirements and compliance needs' },
    { step: 2, title: 'Documentation Review', description: 'Comprehensive review and preparation of documents' },
    { step: 3, title: 'Application Filing', description: 'Professional filing with PESO authorities' },
    { step: 4, title: 'PESO Coordination', description: 'Regular follow-ups and coordination with officials' },
    { step: 5, title: 'Final Approval & Support', description: 'License delivery and ongoing compliance support' }
  ];

  industries = [
    'Petroleum Retail Outlets',
    'LPG Bottling Plants',
    'Chemical Industries',
    'Fireworks & Explosives Units',
    'Gas Storage & Warehousing',
    'Manufacturing Units'
  ];

  testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'ABC Petroleum Ltd.',
      review: 'Excellent service! They helped us get our petroleum license in record time with complete documentation support.'
    },
    {
      name: 'Priya Sharma',
      company: 'XYZ Gas Cylinders',
      review: 'Professional team with deep knowledge of PESO regulations. Highly recommended for gas cylinder licensing.'
    },
    {
      name: 'Amit Patel',
      company: 'Industrial Solutions Inc.',
      review: 'Their expertise in explosives licensing saved us months of delays. Outstanding consultation service.'
    }
  ];

  currentTestimonial = 0;

  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentTestimonial = this.currentTestimonial === 0 
      ? this.testimonials.length - 1 
      : this.currentTestimonial - 1;
  }
}
