import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HelperService } from './helper.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl: string = environment.apiUrl;
    private userInfoKey: string = 'userInfoKey';

    constructor(
        private http: HttpClient,
        private router: Router,
        private helperService: HelperService ) { }

    public login(email: string, password: string){
        let url = `${this.apiUrl}/login`;
        let data = {email, password};
        return this.http.post(url, this.helperService.getFormData(data)).toPromise();
    }

    public logout(){
        this.removeUserInfoLS();
        this.router.navigate(['/']);
    }

    public setUserInfoLS(info){
        localStorage.setItem(this.userInfoKey, JSON.stringify(info));
    }

    public getUserInfoLS(){
        return JSON.parse(localStorage.getItem(this.userInfoKey));
    }

    public removeUserInfoLS(){
        localStorage.removeItem(this.userInfoKey);
    }
}
