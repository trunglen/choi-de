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
  @Input() uid: string
  guess$: Observable<any>
  histories = []
  constructor(
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.guess$ = this.db.list('/guess/' + this.uid).valueChanges()
    this.db.list('/guess/' + this.uid).valueChanges().subscribe(res => {
      res.forEach(element1 => {
        console.log(element1)
        Object.keys(element1).forEach((k, i) => {
          element1[k].forEach(element => {
            this.histories.push({ date: k, money: (<any>element).money, number: (<any>element).number, win: (<any>element).win })
          });
        })
      });
    })
  }
}
