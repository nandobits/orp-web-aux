import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotationService } from '@app/services/quotation.service';
import { ClientService } from '@app/services/client.service';

@Component({
  selector: 'app-prospects-people-quoting-car-update-data',
  templateUrl: './prospects-people-quoting-car-update-data.component.html',
  styles: []
})
export class ProspectsPeopleQuotingCarUpdateDataComponent implements OnInit {
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
            })
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }

    /* Events */
    public onSaveInfo(){
        this.quotationService.updateQuotationData(this.quotationId ,this.quotation).then( (res: any) => {
            if(res.error){
                alert(res.message);
            }else{
                this.router.navigate(['/admin/prospects/people/quoting/car', this.userId, this.quotationId]);
            }
        })
    }

}
