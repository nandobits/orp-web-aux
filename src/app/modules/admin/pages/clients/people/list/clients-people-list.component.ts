import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '@app/services/client.service';

@Component({
  selector: 'app-clients-people-list',
  templateUrl: './clients-people-list.component.html',
  styleUrls: ['./clients-people-list.component.scss']
})
export class ClientsPeopleListComponent implements OnInit {
    public clients: any[];

    constructor(
        private router: Router,
        private clientService: ClientService,
    ) { }

    ngOnInit() {
        this.clientService.getClients().then( (res: any[]) => {
            this.clients = res;
        });
    }

    public onChangeToProspect(userId){
        this.clientService.changeToProspect(userId).then((res: any) => {
            if(res.error){
                alert(res.message);
            }else{
                this.router.navigate(['/admin/prospects/people']);
            }
        })
    }
}
