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
  selector: 'app-birthday',
  templateUrl: './birthday.page.html',
  styleUrls: ['./birthday.page.scss'],
})
export class BirthdayPage {

	private myToast: any;
	DATA_STORAGE = 'data';
	birthday_package=  "";
	food_menu=  "";
	name_of_celebrant=  "";
	sex=  "";
	date_of_birth=  "";
	address=  "";
	theme=  "";
	contact_person=  "";
	number_of_visitors=  "";
	contact_number=  "";
	transaction_date=  "";
	gmail_account=  "";
	date_of_celebration=  "";
	facebook_account=  "";
	time_of_celebration=  "";

  constructor(public contactService: ContactServiceService, public toast: ToastController,) { }

  insertDataToBirthdayrecord(birthpackage, menus, celebrantname, sex, datebirth, address, theme, cperson, num, cnumber, transact_date, gmail, celeb_date, fb, celeb_time){
    this.contactService.insertDataToBirthdayrecord(this.birthday_package,this.food_menu,this.name_of_celebrant,this.sex,this.date_of_birth,this.address,this.theme,this.contact_person,this.number_of_visitors, this.contact_number,this.transaction_date,this.gmail_account,this.date_of_celebration,this.facebook_account,this.time_of_celebration)
    this.alerts();
    this.clearField();
  }
  clearField(){
    this.birthday_package=  "";
	this.food_menu=  "";
	this.name_of_celebrant=  "";
	this.sex=  "";
	this.date_of_birth=  "";
	this.address=  "";
	this.theme=  "";
	this.contact_person=  "";
	this.number_of_visitors=  "";
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

