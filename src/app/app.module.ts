import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
