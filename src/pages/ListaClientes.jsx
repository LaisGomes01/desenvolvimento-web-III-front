import { Link } from 'react-router'

function ListaClientes() {
  const clientes = [
    {
      id: 1,
      nome: 'Ana Souza',
      cpf: '12345678901',
      email: 'ana.cecilia@email.com',
    },
    {
      id: 2,
      nome: 'Bruno Lima',
      cpf: '23456789012',
      email: 'bruno.lima@email.com',
    },
    {
      id: 3,
      nome: 'Carol Mendes',
      cpf: '34567890123',
      email: 'carol.mendes@email.com',
    },
     {
      id: 4,
      nome: 'Ben Jovial',
      cpf: '34567898159',
      email: 'benn.joovial@email.com',
    },
  ]

  return (
    <main className="pagina-clientes">
      <h1>Lista de Clientes</h1>

      <ul className="lista-clientes">
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <strong>{cliente.nome}</strong>
            <span>CPF: {cliente.cpf}</span>
            <span>E-mail: {cliente.email}</span>
          </li>
        ))}
      </ul>

      <Link to="/clientes">Voltar para Gerenciamento de Clientes</Link>
    </main>
  )
}

export default ListaClientes