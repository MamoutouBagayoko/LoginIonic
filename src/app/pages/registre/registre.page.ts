import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {

  constructor(
    public serv:AuthService,
    public create:AngularFirestore,
    public router:Router,
    private toastController:ToastController
  ) { }

  ngOnInit() {
  }
registre(data){
  try {
    this.serv.registerUser( data.value.email,data.value.password).then(res=>{ console.log(res);
      this.create.collection('user').doc(res.user.uid).set({
        'userName':data.value.name,
        'userEmail':data.value.email,
        'userPassword':data.value.password,
        'userPhon':data.value.phon,
      } )
    
    },
    
    )
    this.presentToastWithOptions();
    this.router.navigate(['login']);
  } catch (error) {
    
  }
 
}

//pour afficher le message de l'enregistrement
async presentToastWithOptions() {
  const toast = await this.toastController.create({
    header: 'ENREGISTREMENT',
    message: 'Enregistrement éffectué',
    position: 'middle',
    buttons: [
      {
        side: 'start',
        icon: 'star',
        text: 'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  await toast.present();

  const { role } = await toast.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

}

