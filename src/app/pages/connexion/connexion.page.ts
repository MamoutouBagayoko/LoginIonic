import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(public serv: AuthService,
    public router:Router) { }

  ngOnInit() {
  }
  signUp(data){
    try {
      this.serv.loginUser(data.value.email, data.value.password).then(res=>{
        console.log(res),
        this.router.navigate(['home'])
      })
        
    } catch (error) {
      console.log(error);
      
    }
  
}
insc(){
  this.router.navigate(['registre']);
}
omi(){
  this.router.navigate(['forgot-password']);
}

}