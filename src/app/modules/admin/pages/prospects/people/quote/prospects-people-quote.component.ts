import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotationService } from '@app/services/quotation.service';
import { ClientService } from '@app/services/client.service';

@Component({
  selector: 'app-prospects-people-quote',
  templateUrl: './prospects-people-quote.component.html',
  styles: []
})
export class ProspectsPeopleQuoteComponent implements OnInit, OnDestroy {
    public data: any = {};
    public user: any = {};
    private subParams: any;
    private userId: string;

    constructor(
        private router: Router,
        private quotationService: QuotationService,
        private clientService: ClientService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.subParams = this.activatedRoute.params.subscribe( (params) => {
            this.userId = params['userId'];
            this.clientService.getProspect(this.userId).then( (res: any) => {
                let user = res.user;
                this.user = user;
                this.data = {
                    client: user.client_id,
                    name: user.name,
                    name_paternal: user.name_paternal,
                    name_maternal: user.name_maternal,
                    gender: user.gender
                }
            })
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }

    /* Events */
    public onQuoteCar(){
        this.data.insurance_type = 1;
        this.quotationService.createQuotation(this.data).then( (res: any) => {
            if(res.error){
                alert(res.message);
            }else{
                this.router.navigate(['/admin/prospects/people/quoting/car', this.userId ,res.register_id]);
            }
        })
    }
}
