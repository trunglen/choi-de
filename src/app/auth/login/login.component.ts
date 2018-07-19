import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithPopup(provider).then(res=>console.log(res));
  }

}
