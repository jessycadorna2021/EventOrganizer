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
  selector: 'app-packagetransactions',
  templateUrl: './packagetransactions.page.html',
  styleUrls: ['./packagetransactions.page.scss'],
})
export class PackagetransactionsPage {
/*
  DATA_STORAGE = 'data';
		retrieves: any = [];

	  constructor(public contactService: ContactServiceService) { }

	  async ngOnInit() {
	  	this.getAllData();
	  }

	getAllData(){
		this.contactService.getDataFromLumen().then(data => {
			this.retrieves = data;
			console.log(data);
			});
	}
*/
}
