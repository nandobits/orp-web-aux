import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '@app/services/client.service';
import { QuotationService } from '@app/services/quotation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-prospects-people-profile',
  templateUrl: './prospects-people-profile.component.html',
  styles: []
})
export class ProspectsPeopleProfileComponent implements OnInit, OnDestroy {
    public userId: string;
    public user: any = {};
    public agent: any = {};
    public quotations: any[];
    private subParams: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private clientService: ClientService,
        private quotationService: QuotationService
    ) { }

    ngOnInit() {
        this.subParams = this.activatedRoute.params.subscribe( (params) => {
            this.userId = params['userId'];
            this.clientService.getProspect(this.userId).then( (res: any) => {
                this.user = res.user;
                this.user.register_date_formated = moment(this.user.register_date).format('DD/MM/YYYY');
                this.clientService.getSource(this.user.source).then( (res: any) => {
                    if(typeof res.source_id != 'undefined'){
                        this.user.source_name = res.name;
                    }
                })
                this.clientService.getAgentById(this.user.agent).then( (res: any) => {
                    this.agent = res.user;
                })
                this.quotationService.getUserQuotations(this.user.client_id).then( (res: any) => {
                    this.quotations = res;
                })
            })
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }

}
