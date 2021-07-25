import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
const { Camera, Filesystem, Storage } = Plugins;
import { ContactServiceService } from '../services/contact-service.service';

@Injectable({
  providedIn: 'root'
  })

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.page.html',
  styleUrls: ['./wedding.page.scss'],
})

  
export class WeddingPage {

  private myToast: any;
  DATA_STORAGE = 'data';
  bride_name=  "";
  groom_name=  "";
  weding_package=  "";
  wedding_venue=  "";
  food_menu=  "";
  number_of_visitors=  "";
  contact_person=  "";
  wedding_time=  "";
  address=  "";
  contact_number=  "";
  gmail_account=  "";
  facebook_account=  "";
  transaction_date=  "";
  wedding_date=  "";

  constructor(public contactService: ContactServiceService, public toast: ToastController,) { }

  insertDataToWeddingrecord(bride, groom, wedpackage,  wedvenue, menus, num, cperson, wedtime, caddress, cnumber, gmail, fb, transactdate, weddate){
    this.contactService.insertDataToWeddingrecord(this.bride_name,this.groom_name,this.weding_package,this.wedding_venue,this.food_menu,this.number_of_visitors,this.contact_person,this.wedding_time,this.address, this.contact_number,this.gmail_account,this.facebook_account,this.transaction_date,this.wedding_date)
    this.alerts();
    this.clearField();
  }
  clearField(){
    this.bride_name= "";
    this.groom_name= "";
    this.weding_package= "";
    this.wedding_venue= "";
    this.food_menu= "";
    this.number_of_visitors= "";
    this.contact_person= "";
    this.wedding_time= "";
    this.address= "";
    this.contact_number= "";
    this.gmail_account= "";
    this.facebook_account= "";
    this.transaction_date= "";
    this.wedding_date= "";
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

