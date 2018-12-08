import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '@app/services/client.service';
import { QuotationService } from '@app/services/quotation.service';
import * as moment from 'moment';
declare var $: any;

@Component({
  selector: 'app-prospects-people-quoting-car-invoice-acept',
  templateUrl: './prospects-people-quoting-car-invoice-acept.component.html',
  styles: []
})
export class ProspectsPeopleQuotingCarInvoiceAceptComponent implements OnInit {
    public user: any = {};
    public agent: any = {};
    public quotation: any = {};
    public userQuotations: any[];
    public payTypes: any[];
    public planTypes: any[];
    private subParams: any;
    public userId: string;
    public quotationId: string;

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
            this.quotationService.getPayTypes().then((res: any[]) => {
                this.payTypes = res;
            })
            this.quotationService.getPlanTypes().then((res: any[]) => {
                this.planTypes = res;
            })
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }

    public onAcceptQuotation(user_quote_id, insurance_carrier_id, insurance_quotation_id, plan_id){
        let type_pay = $('#orp_type_pay_'+user_quote_id).val();
        let data = {
            client_id: this.userId,
            quotation_id: this.quotationId,
            user_quote_id,
            insurance_carrier_id,
            insurance_quotation_id,
            plan_id,
            type_pay
        }
        this.quotationService.acceptQuotation(data).then((res: any) => {
            if(res.error){
                alert(res.message);
            }else{
                this.router.navigate(['/admin/prospects/people/quoting/car/policy/new/', this.userId, this.quotationId, res.register_id]);
            }
        })
    }
}
