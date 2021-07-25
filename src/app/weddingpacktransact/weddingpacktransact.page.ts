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
  selector: 'app-weddingpacktransact',
  templateUrl: './weddingpacktransact.page.html',
  styleUrls: ['./weddingpacktransact.page.scss'],
})
export class WeddingpacktransactPage {

  DATA_STORAGE = 'data';
		getweddings: any = [];

	  constructor(public contactService: ContactServiceService) { }

	  async ngOnInit() {
	  	this.getAllData();
	  }

	getAllData(){
		this.contactService.getDataFromWedding().then(data => {
			this.getweddings = data;
			console.log(data);
			});
	}
}
