import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { endpoint } from '../../../common/constant';

@Component({
  selector: 'app-withdraw-panel',
  templateUrl: './withdraw-panel.component.html',
  styleUrls: ['./withdraw-panel.component.scss']
})
export class WithdrawPanelComponent implements OnInit {
  shortenLink
  isLoading = false
  showResult = false
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onEarnMoney() {
    this.isLoading = true
    this.http.get(endpoint + '/link/token/generate?uid=' + localStorage.getItem('app_uid')).subscribe((res: any) => {
      this.shortenLink = res.shortened_url
      this.showResult = true
    }, err => console.log(err), () => this.isLoading = false)
  }
}
