import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
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
  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.afAuth.user.subscribe(res => {
      this.user = { name: res.displayName, avatar: res.photoURL }
      this.userRef = this.db.database.ref('user')
      this.userRef.on('child_added', data => {
        alert('Người chơi ' + data.val().name + ' mới tham gia')
      })
    })
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
