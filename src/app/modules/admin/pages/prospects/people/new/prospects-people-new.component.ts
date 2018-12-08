import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '@app/services/client.service';
declare var BeFormWizard;

@Component({
  selector: 'app-prospects-people-new',
  templateUrl: './prospects-people-new.component.html',
  styles: []
})
export class ProspectsPeopleNewComponent implements OnInit {
    public user: any = {};
    public sources: any[];
    public agents: any[];

    constructor(private router: Router, private clientService: ClientService) { }

    ngOnInit() {
        BeFormWizard.init();
        this.clientService.getSources().then( (res: any) => {
            this.sources = res.sources;
        })

        this.clientService.getAllAgents().then( (res: any) => {
            this.agents = res.agents;
        })
    }

    /* Events */
    public onSaveProspect(){
        this.clientService.addProspect(this.user).then( (res: any) => {
            if(res.error){
                alert(res.message);
            }else{
                this.router.navigate(['/admin/prospects/people']);
            }
        })
    }
}
