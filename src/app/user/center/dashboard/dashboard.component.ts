import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  luckyNumber = 99
  user = { name: '', avatar: '', uid: '' }
  userRef: firebase.database.Reference
  hideStop = true
  interval
  profile: User = <User>{}
  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('HomeComponent')
    this.router.params.subscribe(res=>console.log(res.id))
  }
}
