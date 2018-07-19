import { Component, OnInit } from '@angular/core';
import { LuckyNumber } from '../../shared/model/lucky-number.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lucky-number',
  templateUrl: './lucky-number.component.html',
  styleUrls: ['./lucky-number.component.scss']
})
export class LuckyNumberComponent implements OnInit {

  guessNumber: LuckyNumber[] = []
  constructor() { }

  ngOnInit() {

  }

  onGuess(f: NgForm) {
    console.log(f.value)
    this.guessNumber.push(f.value)
  }
}
