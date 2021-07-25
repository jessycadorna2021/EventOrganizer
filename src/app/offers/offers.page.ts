import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
const { Camera, Filesystem, Storage } = Plugins;
import { ContactServiceService } from '../services/contact-service.service';

@Injectable({
	providedIn: 'root'
	})


@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage {

	private myToast: any;
  DATA_STORAGE = 'data';
	cus_ocassion = "";
	cus_venue = "";
	cus_mc = "";
	cus_decor ="";
	cus_ent = "";
	cus_sounds = ""; 
	cus_cater= "";
	cus_videograph = "";
	cus_ushers= "";
	cus_beef = "";
	cus_chicken =""; 
	cus_fish = ""; 
	cus_pasta = ""; 
	cus_pork = ""; 
	cus_pancit = ""; 
	cus_veges = "";
	cus_seafoods = ""; 
	cus_desserts = "";

  constructor(public contactService: ContactServiceService, public toast: ToastController,) { }

  insertDataToCustomizedrec(ocassion, venue, mc, decor, ent, sounds, cater, videograph, ushers, beef, chicken, fish, pasta, pork, pancit, veges, seafoods, desserts){
  	this.contactService.insertDataToCustomizedrec(this.cus_ocassion, this.cus_venue,this.cus_mc,this.cus_decor,this.cus_ent,this.cus_sounds,this.cus_cater,this.cus_videograph,this.cus_ushers,this.cus_beef,this.cus_chicken,this.cus_fish,this.cus_pasta,this.cus_pork,this.cus_pancit,this.cus_veges,this.cus_seafoods,this.cus_desserts )
  	this.alerts();
    this.clearField();
  }
  clearField(){
    this.cus_ocassion = "";
	this.cus_venue = "";
	this.cus_mc = "";
	this.cus_decor ="";
	this.cus_ent = "";
	this.cus_sounds = ""; 
	this.cus_cater= "";
	this.cus_videograph = "";
	this.cus_ushers= "";
	this.cus_beef = "";
	this.cus_chicken =""; 
	this.cus_fish = ""; 
	this.cus_pasta = ""; 
	this.cus_pork = ""; 
	this.cus_pancit = ""; 
	this.cus_veges = "";
	this.cus_seafoods = ""; 
	this.cus_desserts = "";
  }

  alerts() {
    this.myToast = this.toast.create({
      header: 'Message',
      message: 'Please fill-in the corresponding form!',
      position: 'middle',
      duration: 2500,
      animated: true,
      color: 'success',
      buttons: [{
        side: 'end',
        text: 'Close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
        }]
      }).then((toastData) => {
        console.log(toastData);
        toastData.present();
        });
  }
}
