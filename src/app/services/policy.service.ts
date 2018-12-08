import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from './helper.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
    private apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient, private helperService: HelperService) { }

    public savePolicy(quotationCostId, data){
        let url = `${this.apiUrl}/save-policy?quotation_cost_id=${quotationCostId}`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public getUserPolicies(userId){
        let url = `${this.apiUrl}/user-policies?client_id=${userId}`;
        return this.http.get(url).toPromise();
    }

    public getUserPoliciesAll(userId){
        let url = `${this.apiUrl}/user-policies-all?client_id=${userId}`;
        return this.http.get(url).toPromise();
    }

    public getPolicy(quotationCostId){
        let url = `${this.apiUrl}/policy?quotation_cost_id=${quotationCostId}`;
        return this.http.get(url).toPromise();
    }

    public updatePolicy(quotationCostId, data){
        let url = `${this.apiUrl}/update-policy?quotation_cost_id=${quotationCostId}`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public renovatePolicy(quotationCostId, data){
        let url = `${this.apiUrl}/renovate-policy?quotation_cost_id=${quotationCostId}`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public endorsePolicy(quotationCostId, data){
        let url = `${this.apiUrl}/endorse-policy?quotation_cost_id=${quotationCostId}`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public cancelPolicy(quotationCostId, data){
        let url = `${this.apiUrl}/cancel-policy?quotation_cost_id=${quotationCostId}`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

}
