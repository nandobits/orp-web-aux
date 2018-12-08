import { Component, OnInit } from '@angular/core';
import { ClientService  } from '@app/services/client.service';

@Component({
  selector: 'app-prospects-people',
  templateUrl: './prospects-people.component.html',
  styles: []
})
export class ProspectsPeopleComponent implements OnInit {
    public prospects: any[];

    constructor(private clientService: ClientService) { }

    ngOnInit() {
        this.clientService.getProspects().then( (res: any) => {
            this.prospects = (res.error) ? [] : res.prospects;
        })
    }

    /* Events */
    public onDeleteProspects(){
        console.log('Delecte...')
    }

    /* Functions */
    public getAgentName(agentId){
        let agent = this.clientService.getAgent(agentId);
        let nameAgent = (agent) ? agent.name+' '+agent.name_paternal : '';
        return nameAgent;
    }

}
