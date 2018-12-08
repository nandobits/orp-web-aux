import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotationService } from '@app/services/quotation.service';
import { ClientService } from '@app/services/client.service';

@Component({
  selector: 'app-prospects-people-quoting-car-update-coverage',
  templateUrl: './prospects-people-quoting-car-update-coverage.component.html',
  styles: []
})
export class ProspectsPeopleQuotingCarUpdateCoverageComponent implements OnInit {
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
                this.quotation.total_theft = 1;
                this.quotation.partial_theft = (this.quotation.partial_theft == 2) ? true : false;
                this.quotation.extension_responsibility = (this.quotation.extension_responsibility == 2) ? true : false;
                this.quotation.mandatory_responsibility = (this.quotation.mandatory_responsibility == 2) ? true : false;
                this.quotation.tire_insurance = (this.quotation.tire_insurance == 2) ? true : false;
                this.quotation.third_without_insurance = (this.quotation.third_without_insurance == 2) ? true : false;
                this.quotation.road_aid = (this.quotation.road_aid == 2) ? true : false;
                this.quotation.primax = (this.quotation.primax == 2) ? true : false;
                this.quotation.special_team = (this.quotation.special_team == 2) ? true : false;
            })
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }

    /* Events */
    public onSaveInfo(){
        this.quotation.partial_theft = (this.quotation.partial_theft) ? 2 : 1;
        this.quotation.extension_responsibility = (this.quotation.extension_responsibility) ? 2 : 1;
        this.quotation.mandatory_responsibility = (this.quotation.mandatory_responsibility) ? 2 : 1;
        this.quotation.tire_insurance = (this.quotation.tire_insurance) ? 2 : 1;
        this.quotation.third_without_insurance = (this.quotation.third_without_insurance) ? 2 : 1;
        this.quotation.road_aid = (this.quotation.road_aid) ? 2 : 1;
        this.quotation.primax = (this.quotation.primax) ? 2 : 1;
        this.quotation.special_team = (this.quotation.special_team) ? 2 : 1;
        this.quotationService.updateQuotationCoverage(this.quotationId, this.quotation).then( (res: any) => {
            if(res.error){
                alert(res.message);
            }else{
                this.router.navigate(['/admin/prospects/people/quoting/car', this.userId, this.quotationId]);
            }
        })
    }

    public onSelectBasic(){
        this.quotation.in_goods = 3;
        this.quotation.in_person = 3;
        this.quotation.for_occupants = 1;
        this.quotation.road_aid = false;
        alert('Covertura básica seleccionada');
    }

    public onSelectLimited(){
        this.quotation.in_goods = 3;
        this.quotation.in_person = 3;
        this.quotation.for_occupants = 1;
        this.quotation.road_aid = false;
        alert('Covertura limitada seleccionada');
    }

    public onSelectWide(){
        this.quotation.in_goods = 3;
        this.quotation.in_person = 3;
        this.quotation.for_occupants = 1;
        this.quotation.road_aid = false;
        this.quotation.material_damage = 2;
        alert('Covertura amplia seleccionada');
    }

}
