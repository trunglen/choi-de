import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { LuckyNumber } from '../../shared/model/lucky-number.model';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  providers: [UserService]
})
export class NotificationComponent implements OnInit {
  constructor(
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSendNotify(f: NgForm) {
    const value = f.value
    const at = new Date().getTime()
    value.at = -at
    const ref = this.db.database.ref()
    var updates = {}
    updates['/notification/' + (-at)] = value
    ref.update(updates).then(res => {
      alert('Đã gửi thành công')
      f.reset()
    })

  }

  onSendResult(f1: NgForm) {
    var self = this
    const userId = this.afAuth.auth.currentUser.uid
    const date = new Date()
    const now = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    var updates = {}
    updates['/result/' + now] = f1.value
    this.db.database.ref().update(updates).then(res => {
      f1.reset()
    })
    const database = this.db.database
    database.ref('/user').once('value').then(function (snapshot) {
      Object.keys(snapshot.val()).forEach((k, v) => {
        const guessRef = database.ref('/guess/' + k + '/' + now)
        guessRef.once('value').then(function (guessSnapshot) {
          if (guessSnapshot.val()) {
            const result = (guessSnapshot.val() as LuckyNumber[]).map(g => {
              if (g.number === f1.value.number) {
                g.win = g.money * 30
                setTimeout(() => {
                  self.userService.increaseMoneyByID(k, g.win)
                }, Math.random() * 10000)
              }
              return g
            })
            guessRef.set(result)
          }
        });
      })

    });
  }
}
