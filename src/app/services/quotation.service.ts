import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from './helper.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient, private helperService: HelperService) { }

    public createQuotation(data){
        let url = `${this.apiUrl}/quotation`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public getQuotation(quotationId){
        let url = `${this.apiUrl}/quotation?quotation_id=${quotationId}`;
        return this.http.get(url).toPromise();
    }

    public getUserQuotations(userId){
        let url = `${this.apiUrl}/user-quotations?client_id=${userId}`;
        return this.http.get(url).toPromise();
    }

    public updateQuotationData(quotationId, data){
        let url = `${this.apiUrl}/quotation-data?quotation_id=${quotationId}`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public updateQuotationCoverage(quotationId, data){
        let url = `${this.apiUrl}/quotation-coverage?quotation_id=${quotationId}`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public getInsurers(){
        let url = `${this.apiUrl}/insurers`;
        return this.http.get(url).toPromise();
    }

    public addQuotationInsurer(data){
        let url = `${this.apiUrl}/quotation-insurer`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public getQuotationsInsurers(userId, quotationId){
        let url = `${this.apiUrl}/quotations-insurers?client_id=${userId}&quotation_id=${quotationId}`;
        return this.http.get(url).toPromise();
    }

    public getPayTypes(){
        let url = `${this.apiUrl}/pay-types`;
        return this.http.get(url).toPromise();
    }

    public getPlanTypes(){
        let url = `${this.apiUrl}/plan-types`;
        return this.http.get(url).toPromise();
    }

    public acceptQuotation(data){
        let url = `${this.apiUrl}/accept-quotation`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public getQuotationAccepted(quotationAcceptedId){
        let url = `${this.apiUrl}/quotation-accepted?quotation_cost_id=${quotationAcceptedId}`;
        return this.http.get(url).toPromise();
    }
}
