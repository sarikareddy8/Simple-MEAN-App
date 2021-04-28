import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';

const routes:Routes=[];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
