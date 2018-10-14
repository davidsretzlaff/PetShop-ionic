import { EnderecoDTO } from "./Endereco";
import { FuncionarioDTO } from "./Funcionario";
import { TipoAnimalDTO } from "./TipoAnimal";

export interface TipoServicoDTO {
    id : string;
    description : string;
    cnpj : string;
    endereco : EnderecoDTO;
    tipoanimal : TipoAnimalDTO[];
}