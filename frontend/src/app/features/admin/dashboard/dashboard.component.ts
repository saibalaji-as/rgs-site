import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InquiryService, Inquiry } from '../../../core/services/inquiry.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-light-grey">
      <!-- Header -->
      <header class="bg-white shadow-soft">
        <div class="container-custom py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-lilac-dark">Admin Dashboard</h1>
          <button (click)="logout()" class="btn-secondary text-sm py-2 px-4">Logout</button>
        </div>
      </header>

      <!-- Stats -->
      <section class="container-custom py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card">
            <h3 class="text-gray-600 mb-2">Total Inquiries</h3>
            <p class="text-3xl font-bold text-lilac-dark">{{ inquiries.length }}</p>
          </div>
          <div class="card">
            <h3 class="text-gray-600 mb-2">Pending</h3>
            <p class="text-3xl font-bold text-orange-500">{{ getPendingCount() }}</p>
          </div>
          <div class="card">
            <h3 class="text-gray-600 mb-2">Contacted</h3>
            <p class="text-3xl font-bold text-green-500">{{ getContactedCount() }}</p>
          </div>
        </div>
      </section>

      <!-- Filters -->
      <section class="container-custom pb-4">
        <div class="flex gap-4">
          <select 
            [(ngModel)]="filterService" 
            (change)="loadInquiries()"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-lilac"
          >
            <option value="">All Services</option>
            <option value="petroleum">Petroleum</option>
            <option value="explosives">Explosives</option>
            <option value="gas-cylinder">Gas Cylinder</option>
            <option value="smpv">SMPV(U)</option>
            <option value="poison">Poison</option>
            <option value="import-export">Import/Export</option>
          </select>

          <select 
            [(ngModel)]="filterContacted" 
            (change)="loadInquiries()"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-lilac"
          >
            <option value="">All Status</option>
            <option value="false">Pending</option>
            <option value="true">Contacted</option>
          </select>
        </div>
      </section>

      <!-- Inquiries Table -->
      <section class="container-custom pb-8">
        <div class="card overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 px-4">Date</th>
                <th class="text-left py-3 px-4">Name</th>
                <th class="text-left py-3 px-4">Email</th>
                <th class="text-left py-3 px-4">Phone</th>
                <th class="text-left py-3 px-4">Service</th>
                <th class="text-left py-3 px-4">Type</th>
                <th class="text-left py-3 px-4">Status</th>
                <th class="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let inquiry of inquiries" class="border-b border-gray-100 hover:bg-lilac-light/20">
                <td class="py-3 px-4 text-sm">{{ inquiry.createdAt | date:'short' }}</td>
                <td class="py-3 px-4">{{ inquiry.fullName }}</td>
                <td class="py-3 px-4 text-sm">{{ inquiry.email }}</td>
                <td class="py-3 px-4 text-sm">{{ inquiry.phone }}</td>
                <td class="py-3 px-4 text-sm">{{ inquiry.serviceRequired }}</td>
                <td class="py-3 px-4 text-sm">{{ inquiry.licenseType }}</td>
                <td class="py-3 px-4">
                  <span [class]="inquiry.contacted ? 'text-green-600' : 'text-orange-600'" class="text-sm font-semibold">
                    {{ inquiry.contacted ? 'Contacted' : 'Pending' }}
                  </span>
                </td>
                <td class="py-3 px-4">
                  <div class="flex gap-2">
                    <button 
                      *ngIf="!inquiry.contacted"
                      (click)="markAsContacted(inquiry._id!)"
                      class="text-green-600 hover:text-green-700 text-sm"
                    >
                      Mark Contacted
                    </button>
                    <button 
                      (click)="deleteInquiry(inquiry._id!)"
                      class="text-red-600 hover:text-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          
          <p *ngIf="inquiries.length === 0" class="text-center py-8 text-gray-500">
            No inquiries found
          </p>
        </div>
      </section>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  private inquiryService = inject(InquiryService);
  private authService = inject(AuthService);
  private router = inject(Router);

  inquiries: Inquiry[] = [];
  filterService = '';
  filterContacted = '';

  ngOnInit(): void {
    this.loadInquiries();
  }

  loadInquiries(): void {
    console.log('Loading inquiries...');
    this.inquiryService.getAllInquiries().subscribe({
      next: (data) => {
        console.log('✅ Received inquiries:', data);
        console.log('✅ Data type:', typeof data, 'Is Array:', Array.isArray(data));
        this.inquiries = Array.isArray(data) ? data : [];
        console.log('✅ Inquiries array length:', this.inquiries.length);
      },
      error: (error) => {
        console.error('❌ Error loading inquiries:', error);
        console.error('❌ Error status:', error.status);
        console.error('❌ Error message:', error.message);
        if (error.status === 401) {
          console.error('❌ Unauthorized - redirecting to login');
          this.logout();
        }
      }
    });
  }

  markAsContacted(id: string): void {
    this.inquiryService.markAsContacted(id).subscribe({
      next: () => {
        this.loadInquiries();
      }
    });
  }

  deleteInquiry(id: string): void {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      this.inquiryService.deleteInquiry(id).subscribe({
        next: () => {
          this.loadInquiries();
        }
      });
    }
  }

  getPendingCount(): number {
    return this.inquiries.filter(i => !i.contacted).length;
  }

  getContactedCount(): number {
    return this.inquiries.filter(i => i.contacted).length;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/admin/login']);
  }
}
