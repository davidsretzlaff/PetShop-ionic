import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetshopService } from "../../services/domain/petshop.service";
import { PetshopDTO } from "../../models/Petshop";
import { ClienteService } from "../../services/domain/Cliente.service";
import { ClienteDTO } from "../../models/Cliente";
import { TipoServicoService } from "../../services/domain/TipoServico.service";
import { TipoServicoDTO } from "../../models/TipoServico";
import { FuncionarioService } from "../../services/domain/Funcionario.service";

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

  items: PetshopDTO;
  id = this.navParams.get('id');
  cliente: ClienteDTO;
  tipoServicos: TipoServicoDTO[];

  constructor(
          public navCtrl: NavController, 
          public navParams: NavParams,
          public PetshopService : PetshopService,
          public CienteService : ClienteService,
          public FuncionarioService : FuncionarioService
          
){ }

  ionViewDidLoad() {

    this.PetshopService.findById(this.id)
    .subscribe(response =>{
      this.items = response;
      this.getFuncionarioById();
    },
    
    error =>{
      console.log(error);
    });
  }

  getFuncionarioById()
  {
    var DescriptionServico = [];
    var idTipoServico=[];

    for (var i = 0; i < this.items.funcionarios.length; i++) { 
       for (var a = 0; a < this.items.funcionarios[i].tipoServico.length ; a++) { 
              DescriptionServico.push(this.items.funcionarios[i].tipoServico[a]);
  }
}    

this.tipoServicos = DescriptionServico;

  }
}
