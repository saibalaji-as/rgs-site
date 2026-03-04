import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LeadFormComponent } from '../../shared/components/lead-form/lead-form.component';

interface ServiceDetail {
  title: string;
  description: string;
  whoNeedsIt: string[];
  documents: string[];
  process: string[];
  faqs: { question: string; answer: string; }[];
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, LeadFormComponent],
  template: `
    <div *ngIf="service">
      <!-- Hero -->
      <section class="bg-gradient-to-br from-lilac to-lilac-light text-white py-16">
        <div class="container-custom">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ service.title }}</h1>
          <p class="text-xl text-lilac-light">{{ service.description }}</p>
        </div>
      </section>

      <!-- Content -->
      <section class="section-padding">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 space-y-12">
              <!-- Who Needs It -->
              <div class="card">
                <h2 class="text-2xl font-bold text-lilac-dark mb-4">Who Needs This License?</h2>
                <ul class="space-y-2">
                  <li *ngFor="let item of service.whoNeedsIt" class="flex items-start">
                    <span class="text-lilac mr-2">✓</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Documents Required -->
              <div class="card">
                <h2 class="text-2xl font-bold text-lilac-dark mb-4">Documents Required</h2>
                <ul class="space-y-2">
                  <li *ngFor="let doc of service.documents" class="flex items-start">
                    <span class="text-lilac mr-2">📄</span>
                    <span>{{ doc }}</span>
                  </li>
                </ul>
              </div>

              <!-- Application Process -->
              <div class="card">
                <h2 class="text-2xl font-bold text-lilac-dark mb-4">Application Process</h2>
                <ol class="space-y-3">
                  <li *ngFor="let step of service.process; let i = index" class="flex items-start">
                    <span class="flex-shrink-0 w-8 h-8 rounded-full bg-lilac text-white flex items-center justify-center mr-3 font-semibold">
                      {{ i + 1 }}
                    </span>
                    <span class="pt-1">{{ step }}</span>
                  </li>
                </ol>
              </div>

              <!-- FAQs -->
              <div class="card">
                <h2 class="text-2xl font-bold text-lilac-dark mb-6">Frequently Asked Questions</h2>
                <div class="space-y-4">
                  <div *ngFor="let faq of service.faqs" class="border-b border-gray-200 pb-4 last:border-0">
                    <h3 class="font-semibold text-lilac-dark mb-2">{{ faq.question }}</h3>
                    <p class="text-gray-600">{{ faq.answer }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1">
              <div class="sticky top-24">
                <app-lead-form />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  service: ServiceDetail | null = null;

  private services: { [key: string]: ServiceDetail } = {
    'petroleum-license': {
      title: 'PESO Petroleum License',
      description: 'Complete assistance for petroleum storage and retail outlet licensing under PESO regulations',
      whoNeedsIt: [
        'Petroleum retail outlets and fuel stations',
        'Petroleum storage facilities',
        'Oil companies and distributors',
        'Industrial units storing petroleum products',
        'Transportation companies handling petroleum'
      ],
      documents: [
        'Company registration documents',
        'Site plan and layout drawings',
        'Fire safety certificates',
        'Environmental clearance',
        'Storage tank specifications',
        'Safety equipment details',
        'Insurance documents',
        'NOC from local authorities'
      ],
      process: [
        'Initial consultation and requirement analysis',
        'Site inspection and compliance assessment',
        'Document preparation and verification',
        'Application submission to PESO',
        'Coordination with PESO officials',
        'Site inspection by PESO team',
        'Compliance verification',
        'License issuance and delivery'
      ],
      faqs: [
        {
          question: 'How long does it take to get a petroleum license?',
          answer: 'Typically 3-6 months depending on documentation completeness and PESO processing time.'
        },
        {
          question: 'What is the validity of the license?',
          answer: 'PESO petroleum licenses are usually valid for 3-5 years and need renewal before expiry.'
        },
        {
          question: 'Is site inspection mandatory?',
          answer: 'Yes, PESO conducts mandatory site inspections to verify safety compliance before license issuance.'
        }
      ]
    },
    'explosives-license': {
      title: 'Explosives License',
      description: 'Expert consultancy for explosives manufacturing, storage, and handling permits',
      whoNeedsIt: [
        'Fireworks manufacturing units',
        'Mining and quarrying companies',
        'Construction companies using explosives',
        'Defense contractors',
        'Explosive storage facilities'
      ],
      documents: [
        'Company incorporation certificate',
        'Factory layout and building plans',
        'Safety distance calculations',
        'Fire fighting arrangements',
        'Security arrangements details',
        'Qualified personnel certificates',
        'Insurance coverage proof',
        'Local authority NOCs'
      ],
      process: [
        'Preliminary consultation and site assessment',
        'Safety compliance evaluation',
        'Documentation compilation',
        'PESO application filing',
        'Technical scrutiny coordination',
        'Site inspection facilitation',
        'Compliance certification',
        'License grant and handover'
      ],
      faqs: [
        {
          question: 'Who can apply for an explosives license?',
          answer: 'Only registered companies with proper infrastructure and qualified personnel can apply.'
        },
        {
          question: 'What safety measures are required?',
          answer: 'Adequate safety distances, fire fighting equipment, security arrangements, and trained staff are mandatory.'
        }
      ]
    }
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.service = this.services[slug] || null;
    });
  }
}
