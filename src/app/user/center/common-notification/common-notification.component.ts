import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-common-notification',
  templateUrl: './common-notification.component.html',
  styleUrls: ['./common-notification.component.scss']
})
export class CommonNotificationComponent implements OnInit {

  notifications$: Observable<any>
  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.notifications$ = this.db.list('/notification', ref => ref.orderByChild('at')).valueChanges()
  }

}
