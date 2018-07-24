import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(
  ) { }

  logout() {
    this.afAuth.auth.signOut().then(res => {
      sessionStorage.clear()
      this.router.navigate(['/auth/login'])
    })
  }
}
