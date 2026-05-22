import { Nav } from '../../components/Nav'
import { Outlet } from 'react-router-dom'

export default function SecretariaLayout() {
    return (
        <div>
            <Nav role='secretaria' />
            <Outlet />
        </div>
    )
}
