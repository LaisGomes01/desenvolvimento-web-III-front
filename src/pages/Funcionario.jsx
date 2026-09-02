import { Link } from 'react-router'

function Clientes() {
  return (
    <div className="pagina-funcionario">
      <h1>Gerenciamento de Clientes</h1>

      <p>Escolha uma das opções:</p>

      <div className="opcoes-funcionario">
        <Link to="/funcionario/listar">
          Listar clientes
        </Link>

        <Link to="/funcionario/cadastrar">
          Cadastrar novo cliente
        </Link>
      </div>

      <Link to="/">
        Voltar para a página inicial
      </Link>
    </div>
  )
}

export default Clientes