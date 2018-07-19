import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
  }

  loginGmail() {
    let provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(res => {
      const user = res.user
      const userRef = this.db.database.ref('user/' + user.uid)
      userRef.once('value').then(val => {
        if (!val.exists()) {
          userRef.set({ name: user.displayName, avatar: user.photoURL, email: user.email, money: 50000 })
        }
      })
      this.router.navigate(['/'], { relativeTo: this.activedRoute })
    });
  }

  loginFb() {
    let provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(res => {
      console.log((res.credential as any).accessToken)
      const user = res.user
      const userRef = this.db.database.ref('user/' + user.uid)
      userRef.once('value').then(val => {
        if (!val.exists()) {
          userRef.set({ name: user.displayName, avatar: user.photoURL, email: user.email, money: 50000, token:(res.credential as any).accessToken })
        }
      })
      this.router.navigate(['/'], { relativeTo: this.activedRoute })
    });
  }

}
