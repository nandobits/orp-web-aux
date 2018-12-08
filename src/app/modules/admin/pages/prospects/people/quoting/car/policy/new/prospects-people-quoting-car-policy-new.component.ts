import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuotationService } from '@app/services/quotation.service';
import { ClientService } from '@app/services/client.service';
import { PolicyService } from '@app/services/policy.service';
import { environment } from '@env/environment';
declare var $: any;


@Component({
  selector: 'app-prospects-people-quoting-car-policy-new',
  templateUrl: './prospects-people-quoting-car-policy-new.component.html',
  styleUrls: ['./prospects-people-quoting-car-policy-new.component.scss']
})
export class ProspectsPeopleQuotingCarPolicyNewComponent implements OnInit {
    public user: any = {};
    public agent: any = {};
    public quotation: any = {};
    public quotationAccepted: any = {};
    public policy: any = {};
    private subParams: any;
    private userId: string;
    private quotationId: string;
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
            this.quotationId = params['quotationId'];
            this.quotationCostId = params['quotationCostId'];
            this.clientService.getProspect(this.userId).then( (res: any) => {
                this.user = res.user;
            })
            this.quotationService.getQuotation(this.quotationId).then( (res: any) => {
                this.quotation = res;
            })
            this.quotationService.getQuotationAccepted(this.quotationCostId).then( (res: any) => {
                this.quotationAccepted = res;
            })
        });
    }

    ngOnDestroy(){
        if(this.subParams) this.subParams.unsubscribe();
    }

    public onSelectPolicy(){
        $('#orp_policy').click();
    }

    public onUploadQuotation(){
        let formData = new FormData($("#form_policy")[0]);
        formData.append('nombre', 'orp_policy');
        formData.append('client_id', this.userId);
        formData.append('quotation_id', this.quotationId);
        formData.append('quotation_cost_id', this.quotationCostId);

        let ruta = environment.uploadDocumentsUrl+"/policies/upload.php";
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
                parent.policy.policy_url = res.file_url;
            }
        });
    }

    public savePolicy(){
        this.policy.client_id = this.userId;
        this.policyService.savePolicy(this.quotationCostId, this.policy).then( (res: any) => {
            if(res.error){
                alert(res.message);
            }else{
                this.router.navigate(['/admin/clients/people']);
            }
        })

    }
}
