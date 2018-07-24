import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../shared/service/user.service';
import { endpoint } from '../../../common/constant';

@Component({
  selector: 'app-earn-money',
  templateUrl: './earn-money.component.html',
  styleUrls: ['./earn-money.component.scss'],
  providers: [UserService]
})
export class EarnMoneyComponent implements OnInit {
  isSuccess = true
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private userService: UserService
  ) { }

  ngOnInit() {
    const uid = sessionStorage.getItem('app_uid')
    this.activatedRoute.params.subscribe(res => {
      this.http.get(endpoint + '/link/token/check?uid='
        + uid + '&token=' + res.id).subscribe((res: any) => {
          this.userService.increaseMoneyByID(uid, 2000)
        }, err => this.isSuccess = false)
    })
  }

}
