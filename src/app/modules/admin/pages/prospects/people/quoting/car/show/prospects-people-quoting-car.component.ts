import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotationService } from '@app/services/quotation.service';
import { ClientService } from '@app/services/client.service';
import * as moment from 'moment';

@Component({
  selector: 'app-prospects-people-quoting-car',
  templateUrl: './prospects-people-quoting-car.component.html',
  styles: []
})
export class ProspectsPeopleQuotingCarComponent implements OnInit {
    public user: any = {};
    public quotation: any = {};
    private subParams: any;
    private userId: string;
    private quotationId: string;

    constructor(
        private router: Router,
        private quotationService: QuotationService,
        private clientService: ClientService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.subParams = this.activatedRoute.params.subscribe( (params) => {
            this.userId = params['userId'];
            this.quotationId = params['quotationId'];
            this.clientService.getProspect(this.userId).then( (res: any) => {
                this.user = res.user;
            })
            this.quotationService.getQuotation(this.quotationId).then( (res: any) => {
                this.quotation = res;
                this.quotation.birthdate_formated = (this.quotation.birthdate) ? moment(this.quotation.birthdate).format('DD-MM-YYYY') : '';
            })
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }

}
