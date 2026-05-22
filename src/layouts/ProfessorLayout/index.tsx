import { Nav } from '../../components/Nav'
import { Outlet } from 'react-router-dom'

export default function ProfessorLayout() {
    return (
        <div>
            <Nav role="professor" />

            <Outlet />
        </div>
    )
}
