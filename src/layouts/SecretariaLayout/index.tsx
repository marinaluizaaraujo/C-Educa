import { Nav } from '../../components/Nav'
import { Outlet } from 'react-router-dom'
import { Container, Content } from './styles'
import { AlunosProvider } from '../../contexts/AlunosContext'

export default function SecretariaLayout() {
  return (
    <AlunosProvider>
      <Container>
        <Nav role='secretaria' />

        <Content>
          <Outlet />
        </Content>
      </Container>
    </AlunosProvider>
  )
}