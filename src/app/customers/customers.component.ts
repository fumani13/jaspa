import { Component, OnInit } from '@angular/core';
import {  AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  firstname: string;
  email: string;
  contact: number;
  nationality: string;
  idnumber:number;
  custlocation: string;
  custcollection: AngularFirestoreCollection<any> = this.afs.collection('customer');
  custom =this.custcollection.valueChanges();

  constructor( private afs: AngularFirestore) { }

  ngOnInit() {
  }
  
  add(){
   this.custcollection.add({
    firstname: this.firstname,
     contact: this.contact,
     email: this.email,
     idnumber:this.idnumber,
     nationality: this.nationality,
     custlocation: this.custlocation,
   }).then((docRef) => {
     this.custcollection.doc(docRef.id).update({
       custid: docRef.id
   })
   }).catch((err) =>{
     console.log(err);
   })
  }

  update(cust) {
    this.custcollection.doc(cust.custid).update({
      firstname: 'newfirstname',
     contact: 'newcontact',
     email: 'newemail',
     idnumber:'newidnumber',
     nationality: 'newnationality',
     custlocation: 'newcustlocation',
    }).then(() => {
      console.log("updated");
    })
  }

  delete(cust){
    this.custcollection.doc(cust.custid).delete().then(() => {
      console.log("updated");
    })
  }
}
