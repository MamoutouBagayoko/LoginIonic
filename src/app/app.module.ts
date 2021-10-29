 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


// les importations 
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     FormsModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
AngularFireAuthModule,
AngularFireStorageModule,
AngularFireDatabaseModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}