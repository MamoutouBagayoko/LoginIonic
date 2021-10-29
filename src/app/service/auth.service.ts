import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(
    private afAuth: AngularFireAuth
  ) { }

  registerUser(email, password) {
    return new Promise<any>((resolve, reject) => {

      this.afAuth.createUserWithEmailAndPassword(email, password).then(
          res => resolve(res),
          err => reject(err))
    })

  }

  loginUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  
  }

  // logoutUser() {
  //   return new Promise((resolve, reject) => {
  //     if (this.afAuth.currentUser) {
  //       this.afAuth.signOut()
  //         .then(() => {
  //           console.log("LOG Out");
  //           resolve();
  //         }).catch((error) => {
  //           reject();
  //         });
  //     }
  //   })
  // }

  userDetails() {
    return this.afAuth.user
  }
}