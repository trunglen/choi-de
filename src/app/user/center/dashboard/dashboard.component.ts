import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  luckyNumber = 99
  user = { name: '', avatar: '', uid: '' }
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
        this.user = { name: res.displayName, avatar: res.photoURL, uid: res.uid }
        this.db.object('user/' + res.uid).valueChanges().subscribe(profile => {
          this.profile = <User>profile
        })
      })
    });
  }

  ngOnInit() {
    console.log('HomeComponent')

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
