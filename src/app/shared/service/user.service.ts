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
        console.log('increase ', (<any>userSnapshot.val()).money, id)
            userRef.update({ money: (<any>userSnapshot.val()).money + money })
        })
    }
}