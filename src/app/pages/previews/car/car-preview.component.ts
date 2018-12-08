import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotationService } from '@app/services/quotation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-car-preview',
  templateUrl: './car-preview.component.html',
  styleUrls: ['./car-preview.component.scss']
})
export class CarPreviewComponent implements OnInit {
    public user: any = {};
    public quotation: any = {};
    public info: any = { acceptInfoData: false, acceptInfoCar: false };
    private subParams: any;
    private userId: string;
    private quotationId: string;

    constructor(
        private router: Router,
        private quotationService: QuotationService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.subParams = this.activatedRoute.params.subscribe( (params) => {
            this.quotationId = params['quotationId'];
            this.quotationService.getQuotation(this.quotationId).then( (res: any) => {
                this.quotation = res;
                this.quotation.birthdate_formated = (this.quotation.birthdate) ? moment(this.quotation.birthdate).format('DD-MM-YYYY') : '';
                console.log('this.quotation: ',this.quotation);
            });
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }

    public onSaveQuotation(){
        if(this.info.acceptInfoData && this.info.acceptInfoCar){
            this.quotation.partial_theft = (this.quotation.partial_theft) ? 2 : 1;
            this.quotation.extension_responsibility = (this.quotation.extension_responsibility) ? 2 : 1;
            this.quotation.mandatory_responsibility = (this.quotation.mandatory_responsibility) ? 2 : 1;
            this.quotation.tire_insurance = (this.quotation.tire_insurance) ? 2 : 1;
            this.quotation.third_without_insurance = (this.quotation.third_without_insurance) ? 2 : 1;
            this.quotation.road_aid = (this.quotation.road_aid) ? 2 : 1;
            this.quotation.primax = (this.quotation.primax) ? 2 : 1;
            this.quotation.special_team = (this.quotation.special_team) ? 2 : 1;

            this.quotationService.updateQuotationData(this.quotationId ,this.quotation).then( (res: any) => {
                if(res.error){
                    alert(res.message);
                }else{
                    this.quotationService.updateQuotationCoverage(this.quotationId, this.quotation).then( (res: any) => {
                        if(res.error){
                            alert(res.message);
                        }else{
                            alert('¡Información enviada exitosamente!');
                        }
                    })
                }
            })
        }else{
            alert('No has confirmado tu información');
        }
    }
}
