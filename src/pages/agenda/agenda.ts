import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaFuncionarioDTO } from "../../models/AgendaFuncionario";
import { AgendaFuncionarioService } from "../../services/domain/AgendaFuncionario.service";

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  petEscolhido = this.navParams.get('pet');
  servicoEscolhido=  this.navParams.get('servico');
  Agenda : AgendaFuncionarioDTO[];
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public AgendaService : AgendaFuncionarioService) {
  }

  ionViewDidLoad() {
  this.AgendaService.findAll()// buscando um cliente padrão para simula~ção
    .subscribe(response =>{
      this.Agenda = response;
    },
    error =>{
      console.log(error);
    });
  }

}
