import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
import { ContactServiceService } from '../services/contact-service.service';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
	providedIn: 'root'
	})

@Component({
  selector: 'app-birthpacktransact',
  templateUrl: './birthpacktransact.page.html',
  styleUrls: ['./birthpacktransact.page.scss'],
})
export class BirthpacktransactPage {

  DATA_STORAGE = 'data';
		getbirthdays: any = [];

	  constructor(public contactService: ContactServiceService) { }

	  async ngOnInit() {
	  	this.getAllData();
	  }

	getAllData(){
		this.contactService.getDataFromBirthday().then(data => {
			this.getbirthdays = data;
			console.log(data);
			});
	}
}
