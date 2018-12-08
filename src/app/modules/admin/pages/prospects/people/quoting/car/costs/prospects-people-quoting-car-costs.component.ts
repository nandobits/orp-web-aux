import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '@app/services/client.service';
import { QuotationService } from '@app/services/quotation.service';
import { environment } from '@env/environment';
declare var $: any;

@Component({
  selector: 'app-prospects-people-quoting-car-costs',
  templateUrl: './prospects-people-quoting-car-costs.component.html',
  styles: []
})
export class ProspectsPeopleQuotingCarCostsComponent implements OnInit {
    public user: any = {};
    public insurers: any[];
    public quotation: any = {};
    private subParams: any;
    private userId: string;
    private quotationId: string;

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
            })
            this.quotationService.getQuotation(this.quotationId).then( (res: any) => {
                this.quotation = res;
            })
            this.quotationService.getInsurers().then((res: any[]) => {
                this.insurers = res;
            })
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }

    public onSelectQuotation(insurance_carrier_id){
        $('#orp_'+insurance_carrier_id).click();
    }

    public onUploadQuotation(insurance_carrier_id, pos){
        let formData = new FormData($("#form_"+insurance_carrier_id)[0]);
        formData.append('nombre', 'orp_'+insurance_carrier_id);
        formData.append('client_id', this.userId);
        formData.append('quotation_id', this.quotationId);
        formData.append('insurance_carrier_id', insurance_carrier_id);

        let ruta = environment.uploadDocumentsUrl+"/quotations/upload.php";
        let parent = this;
        $.ajax({
            url: ruta,
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function(response)
            {
                let res = JSON.parse(response);
                alert(res.message);
                if(res.status == 'success'){
                    parent.insurers[pos].quotation_url = res.file_url;
                }
            }
        });
    }

    public onSaveQuotation(pos){
        let data = {
            'quotation_id': this.quotationId,
            'client_id': this.userId,
            'insurance_carrier_id': this.insurers[pos].insurance_carrier_id,
            'insurance_quotation_id': this.insurers[pos].insurance_quotation_id,
            'quotation_url': this.insurers[pos].quotation_url
        }
        this.quotationService.addQuotationInsurer(data).then( (res: any) => {
            if(res.error){
                alert(res.message);
            }else{
                this.router.navigate(['/admin/prospects/people/quoting/car/invoice', this.userId, this.quotationId]);
            }
        })
    }

}
