import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-top-user',
  templateUrl: './top-user.component.html',
  styleUrls: ['./top-user.component.scss']
})
export class TopUserComponent implements OnInit {
  topUsers: Observable<any[]>;
  constructor(
    private db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.topUsers = this.db.list('user',ref=>ref.orderByChild('sort_money').limitToFirst(10)).valueChanges()
  }
}
