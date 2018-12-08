import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from './helper.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
    private apiUrl: string = environment.apiUrl;
    private pathProspect: string = environment.apiUrl+'/prospects';
    private pathAgent: string = environment.apiUrl+'/agents';
    private pathSource: string = environment.apiUrl+'/sources';
    private agents: any[];

    constructor(private http: HttpClient, private helperService: HelperService) { }

    /* Prospects */
    public getProspects(){
        return this.http.get(this.pathProspect).toPromise();
    }

    public addProspect(data){
        let url = `${this.apiUrl}/prospect`;
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public getProspect(clientId){
        return this.http.get(environment.apiUrl+'/prospect?id='+clientId).toPromise();
    }

    /* Agents */
    public getAgentById(agentId){
        return this.http.get(environment.apiUrl+'/agent?id='+agentId).toPromise();
    }

    public getAllAgents(){
        return this.http.get(this.pathAgent).toPromise();
    }

    public getAgents(){
        this.http.get(this.pathAgent).toPromise().then( (res: any) => {
            this.agents = res.agents;
        })
    }

    public getAgent(agentId){
        for(let agent of this.agents){
            if(agent.agent_id == agentId){
                return agent;
            }
        }
        return null;
    }

    /* Sources */
    public getSources(){
        return this.http.get(this.pathSource).toPromise();
    }

    public getSource(sourceId){
        return this.http.get(environment.apiUrl+'/source?id='+sourceId).toPromise();
    }

    public getClients(){
        let url = `${this.apiUrl}/clients`;
        return this.http.get(url).toPromise();
    }

    public changeToProspect(userId){
        let url = `${this.apiUrl}/client-to-prospect?client_id=${userId}`;
        return this.http.get(url).toPromise();
    }

}
