import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [AuthenticateService]
})
export class HomePage {
user : any = {
  email : null,
  password : null
}
  constructor(public authservice:AuthenticateService ){ }

  create(){
   this.authservice.register(this.user.email,this.user.password) 
  }
  login(){
    this.authservice.login(this.user.email,this.user.password)
  }
}

