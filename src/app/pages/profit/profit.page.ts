import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.page.html',
  styleUrls: ['./profit.page.scss'],
})
export class ProfitPage implements OnInit {
 private user:any
  constructor( private router:Router,
    private ser:AuthService,
    private auth:AngularFireAuth,
    private fire:AngularFirestore,
    private navCtrl:NavController) {
      this.auth.authState.subscribe(auth=>{
        if(auth){
          this.fire.collection('user').doc(auth.uid).valueChanges().subscribe(result=>{
            this.user=result;
           
            
          })
        }
      })
     }

  ngOnInit() {
  }
 logout(){
   this.router.navigate(['home']);
 }

}

