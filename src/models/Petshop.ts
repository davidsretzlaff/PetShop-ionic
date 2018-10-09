

import { EnderecoDTO } from "./Endereco";
import { FuncionarioDTO } from "./Funcionario";


export interface PetshopDTO {
    id : string;
    nome : string;
    cnpj : string;
    endereco : EnderecoDTO;
    funcionario : Array<FuncionarioDTO>;
}