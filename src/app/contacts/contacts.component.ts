import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  //contact: Contact[];
  contacts:Contact[];
  first_name:string;
  last_name:string;
  phone:string;
  constructor(private contactService:ContactService) { }
  
  ngOnInit() {
      this.contactService.getContacts()
      .subscribe((data:Contact[])=>{
        this.contacts=data;
      });
  }

  addContact(){
    const newContact={
      first_name:this.first_name,
      last_name:this.last_name,
      phone:this.phone
     }
     
     this.contactService.addContacts(newContact)
        .subscribe(result=>{
          this.contacts.push(newContact);
    });
    this.first_name=null;
    this.last_name=null;
    this.phone=null;
  }
  deleteContact(id:any){
    this.contactService.deleteContact(id)
        .subscribe(data=>{
                for(var i=0;i<this.contacts.length;i++){
                    if(this.contacts[i]._id == id)
                    {
                      this.contacts.splice(i,1);
                    }

                }
           
        });

  }
}
