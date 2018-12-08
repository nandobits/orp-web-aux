import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent{
    public data = {
        email: '',
        password: ''
    };

    constructor(private authService: AuthService, private router: Router) {
        let user = this.authService.getUserInfoLS();
        if(user != null){
            this.goToDashboard();
        }
    }

    /* Events */
    public login(){
        this.authService.login(this.data.email, this.data.password).then( (res: any) => {
            if(!res.error){
                this.authService.setUserInfoLS(res.user);
                this.goToDashboard();
            }else{
                alert(res.message);
            }
        })
    }

    private goToDashboard(){
        //this.router.navigate(['/admin/dashboard']);
        location.href = '/#/admin/dashboard';
    }

}
