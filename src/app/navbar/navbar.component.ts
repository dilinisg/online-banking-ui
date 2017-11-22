import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;

  constructor(private loginService: LoginService, private router : Router) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  logout(){
    this.loginService.logout().subscribe(
        res => {
          //console.log("Arrived : " + this.loggedIn);
          localStorage.setItem("PortalAdminHasLoggedIn",'');
          location.reload();
          this.router.navigate(['/login']);
        },
        err => console.log(err)
    );
  }

  getDisplay() {
    console.log("User Login : " + this.loggedIn);
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  ngOnInit() {
  }

}
