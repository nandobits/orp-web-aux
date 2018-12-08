import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '@app/services/client.service';
import { QuotationService } from '@app/services/quotation.service';
import { environment } from '@env/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-prospects-people-quoting-car-invoice',
  templateUrl: './prospects-people-quoting-car-invoice.component.html',
  styles: []
})
export class ProspectsPeopleQuotingCarInvoiceComponent implements OnInit {
    public user: any = {};
    public agent: any = {};
    public quotation: any = {};
    public userQuotations: any[];
    private subParams: any;
    public userId: string;
    public quotationId: string;
    public environment: any = environment;

    constructor(
        private router: Router,
        private clientService: ClientService,
        private activatedRoute: ActivatedRoute,
        private quotationService: QuotationService
    ) { }

    ngOnInit() {
        this.subParams = this.activatedRoute.params.subscribe( (params) => {
            this.userId = params['userId'];
            this.quotationId = params['quotationId'];
            this.clientService.getProspect(this.userId).then( (res: any) => {
                this.user = res.user;
                this.clientService.getAgentById(this.user.agent).then( (res:any) => {
                    this.agent = res.user;
                })
            })
            this.quotationService.getQuotation(this.quotationId).then( (res: any) => {
                this.quotation = res;
                this.quotation.birthdate_formated = (this.quotation.birthdate) ? moment(this.quotation.birthdate).format('DD/MM/YYYY') : '';
            })
            this.quotationService.getQuotationsInsurers(this.userId, this.quotationId).then((res: any[]) => {
                this.userQuotations = res;
            })
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }

    onSendQuotation(){
        this.router.navigate(['/admin/prospects/people/profile/',this.userId])
    }

}
