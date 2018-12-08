import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotationService } from '@app/services/quotation.service';
import { ClientService } from '@app/services/client.service';
import { PolicyService } from '@app/services/policy.service';
import { environment } from '@env/environment';
declare var $: any;

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {
    public quotation: any = {};
    public policy: any = {};
    public policies : any[];
    private subParams: any;
    public userId: string;
    private policyId: string;
    private quotationCostId: string;

    constructor(
        private router: Router,
        private clientService: ClientService,
        private activatedRoute: ActivatedRoute,
        private quotationService: QuotationService,
        private policyService: PolicyService,
    ) { }

    ngOnInit() {
        this.subParams = this.activatedRoute.params.subscribe( (params) => {
            this.userId = params['userId'];

            this.policyService.getUserPoliciesAll(this.userId).then( (res: any[]) => {
                this.policies = res;
            })
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }
}
