import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { LuckyNumber } from '../../../shared/model/lucky-number.model';
import { checkTime } from '../../../common/constant';

@Component({
  selector: 'app-lucky-number',
  templateUrl: './lucky-number.component.html',
  styleUrls: ['./lucky-number.component.scss']
})
export class LuckyNumberComponent implements OnInit {

  guessNumber: LuckyNumber[] = []
  guessNumber$: Observable<any>
  now: string
  uid: string
  isEndTime = false
  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    const date = new Date()
    if (date.getHours() >= checkTime) {
      this.isEndTime = true
    }
    this.now = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    this.afAuth.user.subscribe(res => {
      this.uid = res.uid
      this.db.list('guess/' + res.uid + '/' + this.now).valueChanges().subscribe(res => {
        this.guessNumber = <LuckyNumber[]>res
      })
    })
  }

  onGuess(f: NgForm) {
    this.updateMoney(false, f.value.money, f.value)
  }

  onDeleteNumber(i: number) {
    this.updateMoney(true, this.guessNumber[i].money)
    this.guessNumber.splice(i, 1)
    this.db.database.ref('guess/' + this.afAuth.auth.currentUser.uid + '/' + this.now).set(this.guessNumber)
  }

  updateMoney(increase: boolean, money: number, formValue?: any) {
    const userObj = this.db.object('user/' + this.uid)
    this.db.database.ref('user/' + this.uid).once('value').then(snap => {
      if (increase) {
        const temp = (<any>snap.val()).money + money
        userObj.update({ money: temp, sort_money: -temp })
      } else {
        const currentMoney = (<any>snap.val()).money
        if (currentMoney > 0) {
          if (currentMoney < money + 5000) {
            alert('Bạn không thể đặt mức vượt quá tài khoản hiện có 5k')
            return
          }
        } else {
          if (money > 5000) {
            alert('Tài khoản của bạn đang âm. Bạn chỉ đặt tối đa là 5k')
            return
          }
        }
        const temp = currentMoney - money
        userObj.update({ money: temp, sort_money: -temp })
      }
      this.db.database.ref('guess/' + this.afAuth.auth.currentUser.uid + '/' + this.now).set(this.guessNumber)
      if (formValue) {
        this.guessNumber.push(formValue)
      }
    })
  }
}
