import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { User } from '../../shared/model/user.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  luckyNumber = 99
  user = { name: '', avatar: '' }
  userRef: firebase.database.Reference
  hideStop = true
  interval
  profile: User = <User>{}
  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    route: ActivatedRoute
  ) {
    route.params.subscribe(val => {
      // put the code from `ngOnInit` here
      var self = this
      this.afAuth.user.subscribe(res => {
        this.user = { name: res.displayName, avatar: res.photoURL }
        this.db.object('user/' + res.uid).valueChanges().subscribe(profile => {
          this.profile = <User>profile
        })
      })
    });
  }

  ngOnInit() {

  }

  startRandom() {
    this.hideStop = false
    this.interval = setInterval(() => {
      this.luckyNumber = Number.parseInt(Math.random() * 99 + '')
    }, 10)
  }

  stopRandom() {
    this.hideStop = true
    clearInterval(this.interval)
  }
}
