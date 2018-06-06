import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireObject , AngularFireList , AngularFireAction } from 'angularfire2/database'
import * as firebase from 'firebase/app';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { Observable, Subscription, BehaviorSubject} from 'rxjs';


import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  itemRef: AngularFireList<any>; // observable --> type observable 
  //item24: AngularFireList<any>;
  topics: Observable<any[]>;
  topic24: Observable<any[]>;
  //record$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  //size$: BehaviorSubject<string|null>;
  

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title,
              private translateService: TranslateService,
              private i18nService: I18nService,
              db: AngularFireDatabase) {

    
     this.itemRef = db.list('Topic');
     this.topics = this.itemRef.snapshotChanges().pipe(map(actions => actions.map(c => ({ key: c.payload.key, ...c.payload.val() }))));

     this.itemRef.snapshotChanges(['child_added']).subscribe(actions => {
    actions.forEach(action => {
      console.log(action.type);
      console.log(action.key);
      console.log(action.payload.val());
    });
  });


 //    this.topics = this.itemRef.snapshotChanges().pipe(
//      map(changes => 
//        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
//      )
//    );


  //////////////////////////////////////////////


    //  this.size$ = new BehaviorSubject(null);

    //  this.record$ = this.size$.pipe(
    //  switchMap(size => 
    //    db.list('Topic', ref =>
    //      size ? ref.orderByChild('size').equalTo(size) : ref
    //    ).snapshotChanges()
    //  )
    //);


    //this.item24 = db.list('Topic', ref => ref.orderByChild('size').equalTo('size'));



    //this.topic24 = this.item24.snapshotChanges().pipe(map(actions => actions.map(c => ({ key: c.payload.key, ...c.payload.val() }))));

    //this.size$ = this.item24.snapshotChanges().subscribe( actions => {


    // actions.forEach(action => {
    
      //console.log("f"+action.key);
     
    //});


      //console.log('24' + this.topic24);

            //this.users = users
       // });

    //console.log('24' + this.item24);





 //   this.record$=this.size$.pipe(
 // switchMap(size => 
   // db.list('Topic', ref => ref.orderByChild('size').equalTo(size)).snapshotChanges()
 // )
//);


//      this.item24.subscribe(queriedItems => {
 // console.log(queriedItems);  
//});



    // constructor end  

               }


  addItem(newName:String , newSize:String) {
     this.itemRef.push({ name: newName , size: newSize});
     //console.log('THE MOST RECENTLY ADDED CHILD' + this.latest);
     //console.log('THIS is a '+key);
  // this.itemRef.update(this.latest, { size: newSize });

  }
  updateItem(key: string, newName: string) {
     console.log('THIS is a '+key);
    this.itemRef.update(key, { name: newName });
  }
  deleteItem(key: string) {    
    this.itemRef.remove(key); 
  }
  deleteEverything() {
    this.itemRef.remove();
  }



  //////


  // filterBy(size: string|null) {
    
    //console.log('filter list'+this.size$.next(size));
  //}







///////////////////////////////////////////////////////////
 // save(newName: string) {
   // this.itemRef.set({ name: newName });
  //}
  //update(newSize: string) {
  //  this.itemRef.update({ size: newSize });
  //}
  //delete() {
  //  this.itemRef.remove();
 // }


  ngOnInit() {
    // Setup logger
  }

}

