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
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {

	  DATA_STORAGE = 'data';
		getcustomized: any = [];

	  constructor(public contactService: ContactServiceService) { }

	  async ngOnInit() {
	  	this.getAllData();
	  }

	getAllData(){
		this.contactService.getDataFromLumen().then(data => {
			this.getcustomized = data;
			console.log(data);
			});
	}
}
