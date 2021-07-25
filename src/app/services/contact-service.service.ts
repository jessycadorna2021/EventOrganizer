import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactServiceService {

  constructor(private http: HttpClient) { }

    insertDataToRegister(fullname, username, password): Promise<any> {
  	return new Promise((resolve, reject) => {
  		const data = {
  			fullname: fullname,
  			username: username,
  			password: password
  		};
  		this.http.put('http://localhost:8000/api/register', data).subscribe(data => {
  			resolve(data);
  			}, err => {
  				reject(data);
  				});
  		});
  }

  insertDataToCustomizedrec(ocassion, venue, mc, decor, ent, sounds, cater, videograph, ushers, beef, chicken, fish, pasta, pork, pancit, veges, seafoods, desserts): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = {
      cus_ocassion: ocassion,
      cus_venue: venue,
      cus_mc: mc, 
      cus_decor: decor,
      cus_ent: ent,
      cus_sounds: sounds,
      cus_cater: cater,
      cus_videograph: videograph,
      cus_ushers: ushers,
      cus_beef: beef,
      cus_chicken: chicken,
      cus_fish: fish,
      cus_pasta: pasta,
      cus_pork: pork, 
      cus_pancit: pancit, 
      cus_veges: veges,
      cus_seafoods: seafoods,
      cus_desserts: desserts,        
      };
      this.http.put('http://localhost:8000/api/customize', data).subscribe(data => {
        resolve(data);
        }, err => {
          reject(data);
          });
      });
  }

  insertDataToWeddingrecord(bride, groom, wedpackage,  wedvenue, menus, num, cperson, wedtime, caddress, cnumber, gmail, fb, transactdate, weddate): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = {
      bride_name: bride,
      groom_name: groom,
      weding_package: wedpackage,
      wedding_venue: wedvenue,
      food_menu: menus,
      number_of_visitors: num,
      contact_person: cperson,
      wedding_time: wedtime,
      address:caddress,
      contact_number: cnumber,
      gmail_account: gmail,
      facebook_account: fb,
      transaction_date: transactdate,
      wedding_date: weddate
      };
      this.http.put('http://localhost:8000/api/create', data).subscribe(data => {
        resolve(data);
        }, err => {
          reject(data);
          });
      });
  }
  insertDataToCustomizedweddingrecord(bride, groom, wedvenue, cperson, caddress, cnumber, num,  wedtime, gmail, fb, transactdate, weddate): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = {
      bride_name: bride,
      groom_name: groom,
      wedding_venue: wedvenue,
      contact_person: cperson,
      address:caddress,
      contact_number: cnumber,
      number_of_visitors: num,
      wedding_time: wedtime,
      gmail_account: gmail,
      facebook_account: fb,
      transaction_date: transactdate,
      wedding_date: weddate
      };
      this.http.put('http://localhost:8000/api/customizeweddingrecord', data).subscribe(data => {
        resolve(data);
        }, err => {
          reject(data);
          });
      });
  }

  insertDataToBirthdayrecord(birthpackage, menus, celebrantname,  sex, datebirth, address, theme, cperson, num, cnumber, transact_date, gmail, date_celeb, fb, time_celeb): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = {
      birthday_package: birthpackage,
      food_menu: menus,
      name_of_celebrant: celebrantname,
      sex: sex,
      date_of_birth: datebirth,
      address: address,
      theme:theme,
      contact_person: cperson,
      number_of_visitors: num,
      contact_number: cnumber,
      transaction_date: transact_date,
      gmail_account: gmail,
      date_of_celebration: date_celeb,
      facebook_account: fb,
      time_of_celebration: time_celeb, 
      };
      this.http.put('http://localhost:8000/api/birthday', data).subscribe(data => {
        resolve(data);
        }, err => {
          reject(data);
          });
      });
  }

  insertDataToReunionrecord(r_type, num, r_package,  menus, address, cperson, cnumber, gmail, fb, transact_date, celeb_date, celeb_time): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = {
      type_of_reunion: r_type,
      number_of_visitors: num,
      reunion_package: r_package,
      food_menu: menus,
      address: address,
      contact_person: cperson,
      contact_number: cnumber,
      gmail_account: gmail,
      facebook_account: fb,
      transaction_date: transact_date,
      date_of_celebration: celeb_date,
      time_of_celebration: celeb_time,  
      };
      this.http.put('http://localhost:8000/api/reunion', data).subscribe(data => {
        resolve(data);
        }, err => {
          reject(data);
          });
      });
  }

  insertDataToAnniversaryrecord(anniv_type, num, anniv_package,  menus, address, anniv_num, cperson, cnumber, transact_date, gmail, celeb_date, fb,  celeb_time): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = {
      type_of_anniversary: anniv_type,
      number_of_visitors: num,
      anniversary_package: anniv_package,
      food_menu: menus,
      address: address,
      anniv_num: anniv_num,
      contact_person: cperson,
      contact_number: cnumber,
      transaction_date: transact_date,
      gmail_account: gmail,
      date_of_celebration: celeb_date,
      facebook_account: fb,
      time_of_celebration: celeb_time,  
      };
      this.http.put('http://localhost:8000/api/anniv', data).subscribe(data => {
        resolve(data);
        }, err => {
          reject(data);
          });
      });
  }

  insertDataToCustomizedbirthdayrecord(celebrantname,  sex, datebirth, address, theme, cperson, num, cnumber, transact_date, gmail, date_celeb, fb, time_celeb): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = {
      name_of_celebrant: celebrantname,
      sex: sex,
      date_of_birth: datebirth,
      address: address,
      theme:theme,
      contact_person: cperson,
      number_of_visitors: num,
      contact_number: cnumber,
      transaction_date: transact_date,
      gmail_account: gmail,
      date_of_celebration: date_celeb,
      facebook_account: fb,
      time_of_celebration: time_celeb, 
      };
      this.http.put('http://localhost:8000/api/customizebirthdayrecord', data).subscribe(data => {
        resolve(data);
        }, err => {
          reject(data);
          });
      });
  }

  insertDataToCustomizedanniversaryrecord(anniv_type, num, address, anniv_num, cperson, cnumber, transact_date, gmail, celeb_date, fb,  celeb_time): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = {
      type_of_anniversary: anniv_type,
      number_of_visitors: num,
      address: address,
      anniv_num: anniv_num,
      contact_person: cperson,
      contact_number: cnumber,
      transaction_date: transact_date,
      gmail_account: gmail,
      date_of_celebration: celeb_date,
      facebook_account: fb,
      time_of_celebration: celeb_time,  
      };
      this.http.put('http://localhost:8000/api/customizeanniversaryrecord', data).subscribe(data => {
        resolve(data);
        }, err => {
          reject(data);
          });
      });
  }

  insertDataToCustomizedreunionrecord(r_type, num, address, cperson, cnumber, gmail, fb, transact_date, celeb_date, celeb_time): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = {
      type_of_reunion: r_type,
      number_of_visitors: num,
      address: address,
      contact_person: cperson,
      contact_number: cnumber,
      gmail_account: gmail,
      facebook_account: fb,
      transaction_date: transact_date,
      date_of_celebration: celeb_date,
      time_of_celebration: celeb_time,  
      };
      this.http.put('http://localhost:8000/api/customizereunionrecord', data).subscribe(data => {
        resolve(data);
        }, err => {
          reject(data);
          });
      });
  }

  insertDataToOthercustomizedrecord(ocassion, num, address, cperson, cnumber, gmail, fb, transact_date, celeb_date, celeb_time): Promise<any> {
    return new Promise((resolve, reject) => {
      const data = {
      ocassion: ocassion,
      number_of_visitors: num,
      address: address,
      contact_person: cperson,
      contact_number: cnumber,
      gmail_account: gmail,
      facebook_account: fb,
      transaction_date: transact_date,
      date_of_celebration: celeb_date,
      time_of_celebration: celeb_time,  
      };
      this.http.put('http://localhost:8000/api/othercustomizerecord', data).subscribe(data => {
        resolve(data);
        }, err => {
          reject(data);
          });
      });
  }

  getDataFromLumen(): Promise<any>{
  return new Promise((resolve, reject)=>{
    this.http.get('http://localhost:8000/api/getcustomize').subscribe(data => {
    console.log(data);
    resolve(data); 

    }, (err) => {
      reject(err);

      });
    });
  }

  getDataFromWedding(): Promise<any>{
  return new Promise((resolve, reject)=>{
    this.http.get('http://localhost:8000/api/getwedding').subscribe(data => {
    console.log(data);
    resolve(data); 

    }, (err) => {
      reject(err);

      });
    });
  }

  getDataFromBirthday(): Promise<any>{
  return new Promise((resolve, reject)=>{
    this.http.get('http://localhost:8000/api/getbirthday').subscribe(data => {
    console.log(data);
    resolve(data); 

    }, (err) => {
      reject(err);

      });
    });
  }

  getDataFromAnniversary(): Promise<any>{
  return new Promise((resolve, reject)=>{
    this.http.get('http://localhost:8000/api/getanniv').subscribe(data => {
    console.log(data);
    resolve(data); 

    }, (err) => {
      reject(err);

      });
    });
  }
  
  getDataFromReunion(): Promise<any>{
  return new Promise((resolve, reject)=>{
    this.http.get('http://localhost:8000/api/getreunion').subscribe(data => {
    console.log(data);
    resolve(data); 

    }, (err) => {
      reject(err);

      });
    });
  }

getDataFromCustomized(): Promise<any>{
  return new Promise((resolve, reject)=>{
    this.http.get('http://localhost:8000/api/getcustomize').subscribe(data => {
    console.log(data);
    resolve(data); 

    }, (err) => {
      reject(err);

      });
    });
  }
}