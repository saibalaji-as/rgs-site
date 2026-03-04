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
    },
    'gas-cylinder-license': {
      title: 'Gas Cylinder License',
      description: 'Comprehensive licensing support for gas cylinder manufacturing, testing, and filling operations',
      whoNeedsIt: [
        'LPG bottling and distribution plants',
        'Industrial gas cylinder manufacturers',
        'Gas cylinder testing facilities',
        'Compressed gas storage units',
        'Gas refilling stations'
      ],
      documents: [
        'Company registration and GST certificates',
        'Factory premises layout plan',
        'Cylinder testing equipment details',
        'Quality control procedures',
        'Safety management system documentation',
        'Fire safety arrangements',
        'Trained personnel certificates',
        'Environmental clearance certificate',
        'Pollution control board NOC'
      ],
      process: [
        'Initial assessment of facility requirements',
        'Gap analysis for compliance standards',
        'Preparation of technical documentation',
        'Application submission to PESO',
        'Pre-inspection compliance check',
        'PESO inspection coordination',
        'Rectification of observations if any',
        'Final approval and license issuance'
      ],
      faqs: [
        {
          question: 'What types of gas cylinder licenses are available?',
          answer: 'Licenses are available for manufacturing, testing, filling, and storage of various gas cylinders including LPG, CNG, and industrial gases.'
        },
        {
          question: 'How often do cylinders need testing?',
          answer: 'Gas cylinders must be tested periodically as per Gas Cylinder Rules - typically every 5-15 years depending on cylinder type.'
        },
        {
          question: 'What are the key safety requirements?',
          answer: 'Proper storage facilities, trained personnel, testing equipment, fire safety systems, and emergency response procedures are mandatory.'
        }
      ]
    },
    'smpv-license': {
      title: 'SMPV(U) License',
      description: 'Static and Mobile Pressure Vessel (Unfired) licensing services for safe operation and compliance',
      whoNeedsIt: [
        'Chemical and pharmaceutical industries',
        'Food processing plants',
        'Beverage manufacturing units',
        'Industrial gas storage facilities',
        'Refrigeration and cold storage units',
        'Boiler and pressure vessel manufacturers'
      ],
      documents: [
        'Vessel design and engineering drawings',
        'Material test certificates',
        'Welding procedure specifications',
        'Welder qualification certificates',
        'Non-destructive testing reports',
        'Hydraulic test certificates',
        'Safety valve calibration certificates',
        'Manufacturer registration documents',
        'Site installation drawings'
      ],
      process: [
        'Technical specification review',
        'Design approval application',
        'Manufacturing stage inspections',
        'Welding and NDT verification',
        'Hydraulic testing supervision',
        'Final inspection coordination',
        'Documentation compilation',
        'License and registration certificate issuance'
      ],
      faqs: [
        {
          question: 'What is the difference between static and mobile pressure vessels?',
          answer: 'Static vessels are permanently installed at one location, while mobile vessels are mounted on vehicles or trailers for transportation.'
        },
        {
          question: 'Is periodic inspection required?',
          answer: 'Yes, pressure vessels require periodic inspections every 2-5 years depending on vessel type and operating conditions.'
        },
        {
          question: 'Who can manufacture pressure vessels?',
          answer: 'Only manufacturers registered with PESO and having qualified welders and proper testing facilities can manufacture pressure vessels.'
        }
      ]
    },
    'poison-license': {
      title: 'Prohibition & Poison License',
      description: 'Licensing services for handling, storage, and distribution of prohibited and poisonous substances',
      whoNeedsIt: [
        'Pharmaceutical manufacturing companies',
        'Chemical industries handling toxic substances',
        'Pesticide and insecticide manufacturers',
        'Research laboratories',
        'Agricultural chemical distributors',
        'Industrial chemical suppliers'
      ],
      documents: [
        'Drug license or manufacturing license',
        'Company registration documents',
        'Premises layout and storage plan',
        'Qualified person certificates (B.Pharm/M.Pharm)',
        'Storage facility specifications',
        'Security arrangements details',
        'Record maintenance system',
        'Previous license copy (for renewal)',
        'NOC from local police and fire department'
      ],
      process: [
        'Eligibility assessment and consultation',
        'Qualified person appointment verification',
        'Storage facility compliance check',
        'Application preparation and submission',
        'State drug control department coordination',
        'Premises inspection facilitation',
        'Compliance verification',
        'License approval and collection'
      ],
      faqs: [
        {
          question: 'Who is eligible to apply for a poison license?',
          answer: 'Only qualified pharmacists (B.Pharm/M.Pharm) or companies employing qualified persons can apply for poison licenses.'
        },
        {
          question: 'What substances are covered under poison license?',
          answer: 'Substances listed in the Poison Act including certain chemicals, pesticides, and pharmaceutical ingredients that require controlled handling.'
        },
        {
          question: 'How long is the license valid?',
          answer: 'Poison licenses are typically valid for 1-2 years and must be renewed before expiry with updated documentation.'
        }
      ]
    },
    'import-export-approval': {
      title: 'Import/Export PESO Approval',
      description: 'International trade compliance and PESO approvals for petroleum, explosives, and hazardous materials',
      whoNeedsIt: [
        'Import/export companies dealing in petroleum products',
        'Explosives and fireworks importers/exporters',
        'Pressure vessel and gas cylinder traders',
        'Chemical importers and distributors',
        'International logistics companies',
        'Trading houses handling hazardous goods'
      ],
      documents: [
        'Import Export Code (IEC)',
        'Company registration and GST documents',
        'Product specifications and safety data sheets',
        'Manufacturer certificates from origin country',
        'Test reports and quality certificates',
        'Shipping and packaging details',
        'End-use certificate',
        'Port authority NOC',
        'Customs clearance documents'
      ],
      process: [
        'Product classification and regulation assessment',
        'Documentation requirement analysis',
        'PESO approval application preparation',
        'Technical document verification',
        'Application submission to PESO',
        'Customs and port authority coordination',
        'Inspection arrangement if required',
        'Approval certificate issuance',
        'Ongoing compliance support'
      ],
      faqs: [
        {
          question: 'Which products require PESO approval for import/export?',
          answer: 'Petroleum products, explosives, compressed gases, pressure vessels, and other hazardous materials regulated under PESO require prior approval.'
        },
        {
          question: 'How long does the approval process take?',
          answer: 'Typically 2-4 weeks for standard products with complete documentation. Complex cases may take longer.'
        },
        {
          question: 'Is approval required for each shipment?',
          answer: 'It depends on the product type. Some require per-shipment approval while others may have annual approval with shipment notifications.'
        },
        {
          question: 'Can we import without PESO approval?',
          answer: 'No, importing regulated products without PESO approval can result in customs detention, penalties, and legal action.'
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
