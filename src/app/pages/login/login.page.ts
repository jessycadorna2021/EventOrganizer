import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
import { ContactServiceService } from '../services/contact-service.service';

@Injectable({
	providedIn: 'root'
	})

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
	DATA_STORAGE = 'data';
	log_username = "";
	log_password = "";

  constructor(public contactService: ContactServiceService) { }

  insertDataToLumen(username, password){
  	this.contactService.insertDataToLumen(this.log_username,this.log_password)
  }

}
