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
  selector: 'app-annivpacktransact',
  templateUrl: './annivpacktransact.page.html',
  styleUrls: ['./annivpacktransact.page.scss'],
})
export class AnnivpacktransactPage {

  DATA_STORAGE = 'data';
		getannivs: any = [];

	  constructor(public contactService: ContactServiceService) { }

	  async ngOnInit() {
	  	this.getAllData();
	  }

	getAllData(){
		this.contactService.getDataFromAnniversary().then(data => {
			this.getannivs = data;
			console.log(data);
			});
	}
}