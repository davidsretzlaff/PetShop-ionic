import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetshopService } from "../../services/domain/petshop.service";
import { PetshopDTO } from "../../models/Petshop";
import { EnderecoDTO } from "../../models/Endereco";
import { FuncionarioDTO } from "../../models/Funcionario";
import { TipoServicoDTO } from "../../models/TipoServico";
import { TipoServicoService } from "../../services/domain/TipoServico.service";

@IonicPage()
@Component({
  selector: 'page-petshops',
  templateUrl: 'petshops.html',
})
export class PetshopsPage {

items: PetshopDTO[];
catPet : string;
servicos: TipoServicoDTO[];
className: string;



  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public petshopService : PetshopService,
   
     ) {
  }


    
  // função chamando o serviço que consome api
  ionViewDidLoad() {
    this.petshopService.findAll()
    .subscribe(response =>{
      this.items = response;
    },
    error =>{
      console.log(error);
    });
  }


infoPet(value)
{
  this.catPet = value;
}

 getItems(ev) {
   var val = ev.target.value;
    
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        //if(item.funcionario == undefined )
          return (
            item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
            item.endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
             item.funcionarios.some(g => g.tipoServico.some(t => t.description.toLowerCase().indexOf(val.toLowerCase()) > -1 && t.tipoanimal.some(ta => ta.id === this.catPet)))

            )
      })
    }
    else{this.ionViewDidLoad();}
  }


  pageservice(petshop) {
  this.navCtrl.push('ServicoPetPage', {
  id: petshop
 });
}

}
