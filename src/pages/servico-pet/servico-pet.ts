import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetshopService } from "../../services/domain/petshop.service";
import { PetshopDTO } from "../../models/Petshop";

/**
 * Generated class for the ServicoPetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servico-pet',
  templateUrl: 'servico-pet.html',
})
export class ServicoPetPage {


  items: PetshopDTO[];

  constructor(
          public navCtrl: NavController, 
          public navParams: NavParams,
          public PetshopService : PetshopService
          
){ let id = navParams.get('id'); console.log(id)}

  getPetshopById(id) {
    this.PetshopService.findById(id)
    .subscribe(response =>{
      this.items = response;
    },
    error =>{
      console.log(error);
    });
  }

}
