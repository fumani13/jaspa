import { Component, OnInit } from '@angular/core';
import {  AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-artisans',
  templateUrl: './artisans.component.html',
  styleUrls: ['./artisans.component.css']
})
export class ArtisansComponent implements OnInit {
  
  firstname: string;
  email: string;
  contact: number;
  nationality: string;
  idnumber:number;
  artisanlocation: string;
  artcollection: AngularFirestoreCollection<any> = this.afs.collection('artisan');
  artisa =this.artcollection.valueChanges();


  constructor( private afs: AngularFirestore) { }

  ngOnInit() {
  }
  add(){
    this.artcollection.add({
     firstname: this.firstname,
      contact: this.contact,
      email: this.email,
      idnumber:this.idnumber,
      nationality: this.nationality,
      artisanlocation: this.artisanlocation,
    }).then((docRef) => {
      this.artcollection.doc(docRef.id).update({
      artid: docRef.id
    })
    }).catch((err) =>{
      console.log(err);
    })
   }
 
   update(art) {
     this.artcollection.doc(art.artid).update({
      firstname: 'newfirstname',
      contact: 'newcontact',
      email: 'newemail',
      idnumber:'newidnumber',
      nationality: 'newnationality',
      artisanlocation: 'newcustlocation',
     }).then(() => {
       console.log("updated");
     })
   }
 
   delete(art){
     this.artcollection.doc(art.artid).delete().then(() => {
       console.log("updated");
     })
   }

}
