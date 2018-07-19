import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  luckyNumber = 99
  user = { name: '', avatar: '' }
  hideStop = true
  interval
  constructor(
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.afAuth.user.subscribe(res => {
      this.user = { name: res.displayName, avatar: res.photoURL }
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
