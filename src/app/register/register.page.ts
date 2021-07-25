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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  private myToast: any;
  DATA_STORAGE = 'data';
	fullname = "";
	username = "";
	password = "";

  constructor(public contactService: ContactServiceService, public toast: ToastController,) { }

  insertDataToRegister(fullname, username, password){
  	this.contactService.insertDataToRegister(this.fullname, this.username,this.password)
    this.alerts();
    this.clearField();
  }
  clearField(){
    this.fullname="";
    this.username="";
    this.password="";
  }

  alerts() {
    this.myToast = this.toast.create({
      header: 'Message',
      message: 'Your account has been successfully registered!',
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
