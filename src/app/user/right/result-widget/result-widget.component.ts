import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { checkTime } from '../../../common/constant';

@Component({
  selector: 'app-result-widget',
  templateUrl: './result-widget.component.html',
  styleUrls: ['./result-widget.component.scss']
})
export class ResultWidgetComponent implements OnInit {

  result: Observable<any> = new Observable<any>()
  now: string = ''
  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    const date = new Date()
    this.now = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    if (date.getHours() < checkTime) {
      this.now = (date.getDate() - 1) + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    }
    this.result = this.db.object('/result/' + this.now).valueChanges()
  }

}
