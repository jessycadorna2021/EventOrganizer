import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
import { ToastController } from '@ionic/angular';
import { ContactServiceService } from '../services/contact-service.service';

@Injectable({
  providedIn: 'root'
  })

@Component({
  selector: 'app-anniversaries',
  templateUrl: './anniversaries.page.html',
  styleUrls: ['./anniversaries.page.scss'],
})
export class AnniversariesPage {

	private myToast: any;
  DATA_STORAGE = 'data';
	type_of_anniversary=  "";
	number_of_visitors=  "";
	anniversary_package=  "";
	food_menu=  "";
	address=  "";
	anniv_num=  "";
	contact_person=  "";
	contact_number=  "";
	transaction_date=  "";
	gmail_account=  "";
	date_of_celebration=  "";
	facebook_account=  "";
	time_of_celebration=  "";

  constructor(public contactService: ContactServiceService, public toast: ToastController,) { }

  insertDataToAnniversaryrecord(anniv_type, num, anniv_package,  menus, address, anniv_num, cperson, cnumber, transact_date, gmail, celeb_date, fb,  celeb_time){
    this.contactService.insertDataToAnniversaryrecord(this.type_of_anniversary,this.number_of_visitors,this.anniversary_package,this.food_menu,this.address,this.anniv_num,this.contact_person,this.contact_number,this.transaction_date,this.gmail_account,this.date_of_celebration,this.facebook_account,this.time_of_celebration)
    this.alerts();
    this.clearField();
  }
  clearField(){
    this.type_of_anniversary=  "";
	this.number_of_visitors=  "";
	this.anniversary_package=  "";
	this.food_menu=  "";
	this.address=  "";
	this.anniv_num=  "";
	this.contact_person=  "";
	this.contact_number=  "";
	this.transaction_date=  "";
	this.gmail_account=  "";
	this.date_of_celebration=  "";
	this.facebook_account=  "";
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