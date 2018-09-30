import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PetshopService } from "../../services/domain/petshop.service";
import { PetshopDTO } from "../../models/Petshop";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: 
  NavController,
  public petshopService : PetshopService 
  ) {

  }

 ionViewDidLoad() {
    this.petshopService.findAll()
    .subscribe(response =>{
      console.log(response);
    },
    error =>{
      console.log(error);
    });
  }


petshops(){
  this.navCtrl.push('PetshopsPage');
}
}
