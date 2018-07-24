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
      this.saveUser(res)
      this.router.navigate(['/'], { relativeTo: this.activedRoute })
    });
  }

  loginFb() {
    let provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(res => {
      this.saveUser(res)
      this.router.navigate(['/'], { relativeTo: this.activedRoute })
    });
  }

  saveUser(res: firebase.auth.UserCredential) {
    const user = res.user
    const userRef = this.db.database.ref('user/' + user.uid)
    sessionStorage.setItem('app_uid', res.user.uid)
    userRef.once('value').then(val => {
      if (!val.exists()) {
        userRef.set({
          name: user.displayName,
          avatar: user.photoURL,
          email: user.email,
          money: 30000,
          token: (res.credential as any).accessToken,
          uid: user.uid,
          at: -(new Date().getTime())
        })
        this.db.object('/private_notification/' + user.uid).set({
          title: 'Xin chào ' + user.displayName,
          content: 'Chào mừng bạn đến với kiemtieneasy. Chúc các bạn kiếm được nhiều tiền và cùng vui với kiemtieneasy, Cùng xem qua luật chơi nhé!',
          at: -(new Date().getTime())
        })
      }
    })
  }
}
