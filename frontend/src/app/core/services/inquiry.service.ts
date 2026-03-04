import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Inquiry {
  _id?: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  serviceRequired: string;
  licenseType: string;
  message?: string;
  contacted?: boolean;
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  private http = inject(HttpClient);

  submitInquiry(inquiry: Inquiry): Observable<any> {
    return this.http.post(`${environment.apiUrl}/inquiries`, inquiry);
  }

  getAllInquiries(): Observable<Inquiry[]> {
    return this.http.get<any>(`${environment.apiUrl}/inquiries`).pipe(
      map(response => response.data || response)
    );
  }

  markAsContacted(id: string): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/inquiries/${id}/contacted`, {});
  }

  deleteInquiry(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/inquiries/${id}`);
  }
}
