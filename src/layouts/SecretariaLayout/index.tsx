import { Nav } from '../../components/Nav'
import { Outlet } from 'react-router-dom'
import { Container, Content } from './styles'

export default function SecretariaLayout() {
  return (
    <Container>
      <Nav role='secretaria' />

      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}