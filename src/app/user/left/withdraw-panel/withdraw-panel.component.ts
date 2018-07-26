import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { endpoint } from '../../../common/constant';

@Component({
  selector: 'app-withdraw-panel',
  templateUrl: './withdraw-panel.component.html',
  styleUrls: ['./withdraw-panel.component.css']
})
export class WithdrawPanelComponent implements OnInit {
  shortenLink = ''
  isLoading = false
  showResult = false
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.isLoading = false
    this.showResult = false
  }

  onEarnMoney() {
    this.isLoading = true
    console.log(this.isLoading, this.showResult)

    this.http.get(endpoint + '/link/token/generate?uid=' + localStorage.getItem('app_uid')).subscribe((res: any) => {
      this.shortenLink = res.shortened_url
      this.showResult = true
      console.log(this.isLoading, this.showResult)
    }, err => console.log(err), () => {
      console.log('finish')
      console.log(this.isLoading, this.showResult)
      this.isLoading = false
    })
  }
}
