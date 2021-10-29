import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//importe
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public auth: AuthService,
    public router:Router) { }

  ngOnInit() {

  }

  conn(){
 this.router.navigate(['/connexion']);

  }
  insc(){
    this.router.navigate(['/registre']);
  }
}
