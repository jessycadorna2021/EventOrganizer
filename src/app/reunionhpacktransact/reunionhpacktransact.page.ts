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
  selector: 'app-reunionhpacktransact',
  templateUrl: './reunionhpacktransact.page.html',
  styleUrls: ['./reunionhpacktransact.page.scss'],
})
export class ReunionhpacktransactPage {

  DATA_STORAGE = 'data';
		getreunions: any = [];

	  constructor(public contactService: ContactServiceService) { }

	  async ngOnInit() {
	  	this.getAllData();
	  }

	getAllData(){
		this.contactService.getDataFromReunion().then(data => {
			this.getreunions = data;
			console.log(data);
			});
	}
}