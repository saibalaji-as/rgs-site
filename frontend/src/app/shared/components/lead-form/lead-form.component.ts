import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InquiryService } from '../../../core/services/inquiry.service';

@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="card">
      <h3 class="text-2xl font-bold text-lilac-dark mb-6">Get Free Consultation</h3>
      
      <form [formGroup]="leadForm" (ngSubmit)="onSubmit()" class="space-y-4">
        <div>
          <input 
            type="text" 
            formControlName="fullName" 
            placeholder="Full Name *"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-lilac"
          />
          <p *ngIf="leadForm.get('fullName')?.invalid && leadForm.get('fullName')?.touched" 
             class="text-red-500 text-sm mt-1">Name is required</p>
        </div>

        <div>
          <input 
            type="text" 
            formControlName="companyName" 
            placeholder="Company Name"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-lilac"
          />
        </div>

        <div>
          <input 
            type="email" 
            formControlName="email" 
            placeholder="Email *"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-lilac"
          />
          <p *ngIf="leadForm.get('email')?.invalid && leadForm.get('email')?.touched" 
             class="text-red-500 text-sm mt-1">Valid email is required</p>
        </div>

        <div>
          <input 
            type="tel" 
            formControlName="phone" 
            placeholder="Phone Number *"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-lilac"
          />
          <p *ngIf="leadForm.get('phone')?.invalid && leadForm.get('phone')?.touched" 
             class="text-red-500 text-sm mt-1">Valid phone number is required</p>
        </div>

        <div class="relative">
          <select 
            formControlName="serviceRequired"
            class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-lilac focus:ring-2 focus:ring-lilac/20 appearance-none bg-white cursor-pointer transition-all duration-200 hover:border-lilac/50"
          >
            <option value="">Select Service *</option>
            <option value="petroleum">⛽ PESO Petroleum License</option>
            <option value="explosives">💥 Explosives License</option>
            <option value="gas-cylinder">🔥 Gas Cylinder License</option>
            <option value="smpv">🚛 SMPV(U) License</option>
            <option value="poison">⚠️ Prohibition & Poison License</option>
            <option value="import-export">🌐 Import/Export PESO Approval</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg class="w-5 h-5 text-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div class="relative">
          <select 
            formControlName="licenseType"
            class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-lilac focus:ring-2 focus:ring-lilac/20 appearance-none bg-white cursor-pointer transition-all duration-200 hover:border-lilac/50"
          >
            <option value="">License Type *</option>
            <option value="fresh">📝 Fresh Application</option>
            <option value="renewal">🔄 Renewal</option>
            <option value="amendment">✏️ Amendment</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg class="w-5 h-5 text-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div>
          <textarea 
            formControlName="message" 
            placeholder="Your Message"
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-lilac"
          ></textarea>
        </div>

        <button 
          type="submit" 
          [disabled]="leadForm.invalid || isSubmitting"
          class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? 'Submitting...' : 'Submit Inquiry' }}
        </button>

        <p *ngIf="successMessage" class="text-green-600 text-center">{{ successMessage }}</p>
        <p *ngIf="errorMessage" class="text-red-600 text-center">{{ errorMessage }}</p>
      </form>
    </div>
  `
})
export class LeadFormComponent {
  private fb = inject(FormBuilder);
  private inquiryService = inject(InquiryService);

  leadForm: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor() {
    this.leadForm = this.fb.group({
      fullName: ['', Validators.required],
      companyName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      serviceRequired: ['', Validators.required],
      licenseType: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.leadForm.valid) {
      this.isSubmitting = true;
      this.successMessage = '';
      this.errorMessage = '';

      this.inquiryService.submitInquiry(this.leadForm.value).subscribe({
        next: () => {
          this.successMessage = 'Thank you! We will contact you soon.';
          this.leadForm.reset();
          this.isSubmitting = false;
        },
        error: () => {
          this.errorMessage = 'Something went wrong. Please try again.';
          this.isSubmitting = false;
        }
      });
    }
  }
}
