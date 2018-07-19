import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBDayNa9t95ubqUQEgSMqkhGT4i9hw_yTM",
  authDomain: "choi-de.firebaseapp.com",
  databaseURL: "https://choi-de.firebaseio.com",
  projectId: "choi-de",
  storageBucket: "choi-de.appspot.com",
  messagingSenderId: "755104082655"
};

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
