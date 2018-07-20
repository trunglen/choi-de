import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {
  topUsers: Observable<any[]>;
  
  constructor(
    private db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.topUsers = this.db.list('user').valueChanges()
  }

}
