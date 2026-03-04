import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gradient-to-br from-lilac to-lilac-light text-white py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p class="text-xl text-lilac-light">Your trusted partner in PESO licensing and compliance</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-lilac-dark mb-6">Who We Are</h2>
            <p class="text-gray-600 mb-4">
              We are a leading consultancy firm specializing in PESO (Petroleum and Explosives Safety Organisation) 
              licensing and industrial compliance solutions across India. With over 15 years of experience, we have 
              successfully assisted hundreds of businesses in obtaining and maintaining their regulatory licenses.
            </p>
            <p class="text-gray-600 mb-4">
              Our team comprises experienced professionals with deep knowledge of PESO regulations, safety standards, 
              and compliance requirements. We pride ourselves on delivering efficient, reliable, and comprehensive 
              licensing services that help businesses operate legally and safely.
            </p>
          </div>
          <div class="card bg-lilac-light">
            <h3 class="text-2xl font-bold text-lilac-dark mb-4">Our Mission</h3>
            <p class="text-gray-700 mb-6">
              To simplify the complex licensing process and ensure 100% regulatory compliance for businesses 
              dealing with petroleum, explosives, and hazardous materials across India.
            </p>
            <h3 class="text-2xl font-bold text-lilac-dark mb-4">Our Vision</h3>
            <p class="text-gray-700">
              To be India's most trusted and efficient PESO licensing consultancy, setting industry standards 
              for service excellence and compliance expertise.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-light-grey">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-lilac-dark mb-12 text-center">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="text-xl font-bold text-lilac-dark mb-3">Expert Guidance</h3>
            <p class="text-gray-600">15+ years of specialized experience in PESO licensing and compliance</p>
          </div>
          <div class="card text-center">
            <div class="text-5xl mb-4">⚡</div>
            <h3 class="text-xl font-bold text-lilac-dark mb-3">Fast Processing</h3>
            <p class="text-gray-600">Streamlined processes ensuring faster approval timelines</p>
          </div>
          <div class="card text-center">
            <div class="text-5xl mb-4">🇮🇳</div>
            <h3 class="text-xl font-bold text-lilac-dark mb-3">Pan India Service</h3>
            <p class="text-gray-600">Comprehensive coverage across all states and territories</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
