import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
            if(res.status == 3){
                this.authService.setUserInfoLS(res.user);
                this.goToDashboard();
            }else{
                alert('El correo o la contraseña no son correctos.');
            }
        })
    }

    private goToDashboard(){
        this.router.navigate(['/admin/dashboard']);
    }

}
