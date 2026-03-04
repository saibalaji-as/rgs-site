import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadFormComponent } from '../../shared/components/lead-form/lead-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LeadFormComponent],
  template: `
    <section class="bg-gradient-to-br from-lilac to-lilac-light text-white py-16">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl text-lilac-light">Get in touch for expert PESO licensing consultation</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-lilac-dark mb-6">Get In Touch</h2>
            <p class="text-gray-600 mb-8">
              Have questions about PESO licensing? Our expert team is here to help you navigate 
              the compliance process smoothly.
            </p>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-lilac-light rounded-lg flex items-center justify-center text-2xl">
                  📧
                </div>
                <div class="ml-4">
                  <h3 class="font-semibold text-lilac-dark mb-1">Email</h3>
                  <p class="text-gray-600">info&#64;gsamuelandco.com</p>
                  <p class="text-gray-600">support&#64;gsamuelandco.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-lilac-light rounded-lg flex items-center justify-center text-2xl">
                  📞
                </div>
                <div class="ml-4">
                  <h3 class="font-semibold text-lilac-dark mb-1">Phone</h3>
                  <p class="text-gray-600">+91 98765 43210</p>
                  <p class="text-gray-600">+91 98765 43211</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-lilac-light rounded-lg flex items-center justify-center text-2xl">
                  📍
                </div>
                <div class="ml-4">
                  <h3 class="font-semibold text-lilac-dark mb-1">Coverage</h3>
                  <p class="text-gray-600">Pan India Service</p>
                  <p class="text-gray-600">All States & Union Territories</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-lilac-light rounded-lg flex items-center justify-center text-2xl">
                  🕐
                </div>
                <div class="ml-4">
                  <h3 class="font-semibold text-lilac-dark mb-1">Business Hours</h3>
                  <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p class="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="mt-8 card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d319.0511406515422!2d80.25533914361256!3d13.08728458997947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1772622761554!5m2!1sen!2sin"
                width="100%" 
                height="300" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy"
                class="rounded-lg"
              ></iframe>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <app-lead-form />
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}
