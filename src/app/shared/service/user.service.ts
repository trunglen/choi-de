import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {

    constructor(
        private db: AngularFireDatabase
    ) { }

    increaseMoneyByID(id: string, money: number) {
        const userRef = this.db.database.ref('/user/' + id)
        userRef.once('value').then(function (userSnapshot) {
            const temp = (<any>userSnapshot.val()).money + money
            userRef.update({ money: temp, sort_money: -temp })
        })
    }
}