import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-private-notification',
  templateUrl: './private-notification.component.html',
  styleUrls: ['./private-notification.component.scss']
})
export class PrivateNotificationComponent implements OnInit {

  @Input('uid') uid: string
  notif$: Observable<any>
  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.notif$ = this.db.list('/private_notification/' + localStorage.getItem('app_uid'), ref => ref.orderByChild('at')).valueChanges()
  }

  onDelete(at: number) {
    this.db.database.ref('/private_notification/' + localStorage.getItem('app_uid') + '/' + at).remove()
  }
}
