import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public userName: string;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        let user = this.authService.getUserInfoLS();
        this.userName = user.name+' '+user.name_paternal;
    }

    /* Events */
    public logout(){
        this.authService.logout();
    }

}
