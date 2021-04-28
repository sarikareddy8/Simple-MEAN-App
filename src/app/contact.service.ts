import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Contact} from './contact';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {

  constructor(private http:HttpClient) { }

    getContacts(){
      //default response from httpClient isin json format
      return this.http.get('http://localhost:5000/api/contacts');
    }

    addContacts(newContact){
      let headers=new HttpHeaders();
      headers.append('Content-type','application/json');
      return this.http.post('http://localhost:5000/api/contacts',newContact,{headers:headers});
    }

    deleteContact(id){
      return this.http.delete('http://localhost:5000/api/contacts/'+id);
    }
}
