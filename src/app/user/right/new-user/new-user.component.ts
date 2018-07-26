import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  newUsers: Observable<any[]>;
  constructor(
    private db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.newUsers = this.db.list('user',ref=>ref.orderByChild('at').limitToFirst(3)).valueChanges()
  }

}
