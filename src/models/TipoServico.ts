import { EnderecoDTO } from "./Endereco";
import { FuncionarioDTO } from "./Funcionario";

export interface TipoServicoDTO {
    id : string;
    nome : string;
    cnpj : string;
    endereco : EnderecoDTO;
}