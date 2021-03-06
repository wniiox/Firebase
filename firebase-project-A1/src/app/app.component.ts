import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'firebase-project-A1';
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('test').valueChanges();
    //test
  }
}
