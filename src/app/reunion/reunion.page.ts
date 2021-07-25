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
  selector: 'app-reunion',
  templateUrl: './reunion.page.html',
  styleUrls: ['./reunion.page.scss'],
})
export class ReunionPage {
	
	private myToast: any;
  DATA_STORAGE = 'data';
	type_of_reunion=  "";
	number_of_visitors=  "";
	reunion_package=  "";
	food_menu=  "";
	address=  "";
	contact_person=  "";
	contact_number=  "";
	gmail_account=  "";
	facebook_account=  "";
	transaction_date=  "";
	date_of_celebration=  "";
	time_of_celebration=  "";

  constructor(public contactService: ContactServiceService, public toast: ToastController,) { }

  insertDataToReunionrecord(r_type, num, r_package,  menus, address, cperson, cnumber, gmail, fb, transact_date, celeb_date, celeb_time){
    this.contactService.insertDataToReunionrecord(this.type_of_reunion,this.number_of_visitors,this.reunion_package,this.food_menu,this.address,this.contact_person,this.contact_number,this.gmail_account,this.facebook_account,this.transaction_date,this.date_of_celebration,this.time_of_celebration)
    this.alerts();
    this.clearField();
  }
  clearField(){
    this.type_of_reunion=  "";
	this.number_of_visitors=  "";
	this.reunion_package=  "";
	this.food_menu=  "";
	this.address=  "";
	this.contact_person=  "";
	this.contact_number=  "";
	this.gmail_account=  "";
	this.facebook_account=  "";
	this.transaction_date=  "";
	this.date_of_celebration=  "";
	this.time_of_celebration=  "";
  }

  alerts() {
    this.myToast = this.toast.create({
      header: 'Message',
      message: 'Your transaction has been successfully submitted!',
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
