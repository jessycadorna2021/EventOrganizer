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
  selector: 'app-customizedtransaction',
  templateUrl: './customizedtransaction.page.html',
  styleUrls: ['./customizedtransaction.page.scss'],
})
export class CustomizedtransactionPage {
  DATA_STORAGE = 'data';
		getcustomized: any = [];

	  constructor(public contactService: ContactServiceService) { }

	  async ngOnInit() {
	  	this.getAllData();
	  }

	getAllData(){
		this.contactService.getDataFromCustomized().then(data => {
			this.getcustomized = data;
			console.log(data);
			});
	}
}
