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

getItemsbkddd(ev) {
    var val = ev.target.value;
    
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        if(item.funcionario == undefined )
          return (
            item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
            item.endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1)
            item.funcionario.forEach(element => {
              
              console.log(element.nome);
            });
        

               
      })
    }
    else{this.ionViewDidLoad();}
  }

  getItemsdddd(ev) {
    var val = ev.target.value;
    
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
       return (
         item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || 
         item.endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1 //||
        // item.funcionario.findIndex(x => x.t)
         );
      })
    }
    else{this.ionViewDidLoad();}
  }


 teste(){

 }
  getItems(ev)
  {
    var val = ev.target.value;
      var result = [];
      if (val && val.trim() != '') {
      for (var i = 0; i < this.items.length; i++) {
          if (this.items[i].nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || this.items[i].endereco.logradouro.toLowerCase().indexOf(val.toLowerCase()) > -1  ) {
              result.push(this.items[i]);
          }

          for(var a = 0; a < this.items[i].funcionario.length; a++)
          {
            if(this.items[i].funcionario[a].nome.toLowerCase().indexOf(val.toLowerCase()) > -1){
              result.push(this.items[i]);
            }
          }
      }
      this.items = result;
      
}
    else{this.ionViewDidLoad();}
  }

  
}
