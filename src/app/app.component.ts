import { Component, OnInit } from '@angular/core';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private clientService: ClientService) { }

    ngOnInit(){
        this.clientService.getAgents();
    }
}
