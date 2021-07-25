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
  selector: 'app-customizeregister',
  templateUrl: './customizeregister.page.html',
  styleUrls: ['./customizeregister.page.scss'],
})
export class CustomizeregisterPage {

  private myToast: any;
  DATA_STORAGE = 'data';
  bride_name=  "";
  groom_name=  "";
  wedding_venue=  "";
  contact_person=  "";
  address=  "";
  contact_number=  "";
  number_of_visitors=  "";
  wedding_time=  "";
  gmail_account=  "";
  facebook_account=  "";
  transaction_date=  "";
  wedding_date=  "";

  name_of_celebrant=  "";
  sex=  "";
  date_of_birth=  "";
  theme=  "";
  date_of_celebration=  "";
  time_of_celebration=  "";

  type_of_anniversary=  "";
  anniv_num=  "";

  type_of_reunion=  "";

  ocassion= "";
  

  constructor(public contactService: ContactServiceService,  public toast: ToastController,) { }

  insertDataToCustomizedweddingrecord(bride, groom, wedvenue, cperson,  caddress, cnumber, num, wedtime, gmail, fb, transactdate, weddate){
    this.contactService.insertDataToCustomizedweddingrecord(this.bride_name,this.groom_name,this.wedding_venue,this.contact_person,this.address, this.contact_number,this.number_of_visitors,this.wedding_time,this.gmail_account,this.facebook_account,this.transaction_date,this.wedding_date)
    this.alerts();
    this.clearField();
  }

  insertDataToCustomizedbirthdayrecord(celebrantname, sex, datebirth, address, theme, cperson, num, cnumber, transact_date, gmail, celeb_date, fb, celeb_time){
    this.contactService.insertDataToCustomizedbirthdayrecord(this.name_of_celebrant,this.sex,this.date_of_birth,this.address,this.theme,this.contact_person,this.number_of_visitors, this.contact_number,this.transaction_date,this.gmail_account,this.date_of_celebration,this.facebook_account,this.time_of_celebration)
    this.alerts();
    this.clearField();
  }

  insertDataToCustomizedanniversaryrecord(anniv_type, num, address, anniv_num, cperson, cnumber, transact_date, gmail, celeb_date, fb,  celeb_time){
    this.contactService.insertDataToCustomizedanniversaryrecord(this.type_of_anniversary,this.number_of_visitors,this.address,this.anniv_num,this.contact_person,this.contact_number,this.transaction_date,this.gmail_account,this.date_of_celebration,this.facebook_account,this.time_of_celebration)
    this.alerts();
    this.clearField();
  }

  insertDataToCustomizedreunionrecord(r_type, num, address, cperson, cnumber, gmail, fb, transact_date, celeb_date, celeb_time){
    this.contactService.insertDataToCustomizedreunionrecord(this.type_of_reunion,this.number_of_visitors,this.address,this.contact_person,this.contact_number,this.gmail_account,this.facebook_account,this.transaction_date,this.date_of_celebration,this.time_of_celebration)
    this.alerts();
    this.clearField();
  }

  insertDataToOthercustomizedrecord(ocassion, num, address, cperson, cnumber, gmail, fb, transact_date, celeb_date, celeb_time){
    this.contactService.insertDataToOthercustomizedrecord(this.ocassion,this.number_of_visitors,this.address,this.contact_person,this.contact_number,this.gmail_account,this.facebook_account,this.transaction_date,this.date_of_celebration,this.time_of_celebration)
    this.alerts();
    this.clearField();
  }

  clearField(){
    this.bride_name= "";
    this.groom_name= "";
    this.wedding_venue= "";
    this.contact_person= "";
    this.address= "";
    this.contact_number= "";
    this.number_of_visitors= "";
    this.wedding_time= "";
    this.gmail_account= "";
    this.facebook_account= "";
    this.transaction_date= "";
    this.wedding_date= "";

    this.name_of_celebrant=  "";
    this.sex=  "";
    this.date_of_birth=  "";
    this.theme=  "";
    this.date_of_celebration=  "";
    this.time_of_celebration=  "";

    this.type_of_anniversary=  "";
    this.anniv_num=  "";

    this.type_of_reunion=  "";

    this.ocassion= "";
    
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

