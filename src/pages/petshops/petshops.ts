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
servicos: TipoServicoDTO[];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public petshopService : PetshopService,
     public tipoServico : TipoServicoService // importação do serviço 
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




  getItems(ev) {
    var val = ev.target.value;
    
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
       return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
                item.endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                item.funcionario.tipoServico.nome.toLowerCase().indexOf(val.toLowerCase()) > -1) 
        ;
      })
    }
    else{this.ionViewDidLoad();}
  }



  getItemsbkp(ev)
  {
    var val = ev.target.value;
      var result = [];
      if (val && val.trim() != '') {
      for (var i = 0; i < this.items.length; i++) {
          if (this.items[i].nome === val || this.items[i].endereco.logradouro === val  ) {
              result.push(this.items[i]);
          }
      }

      return result;
}
    else{this.ionViewDidLoad();}
  }

  
}
