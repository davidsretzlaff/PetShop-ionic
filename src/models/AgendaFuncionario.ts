import { FuncionarioDTO } from "./Funcionario";
import { TipoServicoDTO } from "./TipoServico";
import { PetshopDTO } from "./Petshop";

export interface AgendaFuncionarioDTO {

    id : number;
		horario : Date;
    Duracao : number;
    hora :number;
    duracao :number;
		funcionario : FuncionarioDTO;
		tipoServico : TipoServicoDTO;
		Petshop : PetshopDTO;
}