import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  guess$: Observable<any>
  histories = []
  constructor(
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
    const uid = sessionStorage.getItem('app_uid')
    this.guess$ = this.db.list('/guess/' + uid).valueChanges()
    this.db.database.ref('/guess/' + uid).once('value').then(res => {
      console.log(res.val(), uid)
      this.histories = []
      if (res.val()) {
        Object.keys(res.val()).forEach(k1 => {
          res.val()[k1].forEach((element, i) => {
            // element1[k].forEach(element => {
            this.histories.push({ date: k1, money: (<any>element).money, number: (<any>element).number, win: (<any>element).win })
            // });
          })
        });
      }
    })
  }
}
