import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar javascript',
    descricao: 'Ver aula 1',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar python',
    descricao: 'Ver aula 1',
    prioridade: 'urgente',
    status: 'concluído'
  },
  {
    titulo: 'Estudar react',
    descricao: 'Ver aula 1',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
