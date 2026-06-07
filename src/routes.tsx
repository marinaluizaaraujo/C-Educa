import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Erro404 } from "./pages/Erro404";
import { Login } from "./pages/Login";
import { Aluno } from "./pages/Aluno";
import Perfil from "./pages/Aluno/Perfil";
import { AlunoLayout } from "./layouts/AlunoLayout";
import { Professor } from "./pages/Professor";
import ProfessorLayout from "./layouts/ProfessorLayout";
import Turmas from "./pages/Professor/Turmas";
import Anotacao from "./pages/Professor/Anotacao";
import SecretariaLayout from "./layouts/SecretariaLayout";
import { Secretaria } from "./pages/Secretaria";
import Vagas from "./pages/Secretaria/Vagas";
import Empresas from "./pages/Secretaria/Empresas";
import Alunos from "./pages/Secretaria/Alunos";
import ListaDeTurmas from "./pages/Secretaria/ListaDeTurmas";
import CadastroAluno from "./pages/Secretaria/Alunos/CadastroAluno";
import EditarAluno from "./pages/Secretaria/Alunos/EditarAluno";
import { Curriculo } from "./pages/Aluno/Curriculo";
import CadastroProfessor from "./pages/Secretaria/Professores/CadastroProfessor";
import { CurriculoPreview } from "./pages/Aluno/Curriculo/Preview";
import { EditarCurriculo } from "./pages/Aluno/EditarCurriculo";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Erro404 />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/aluno",
    element: <AlunoLayout />,
    children: [
      {
        index: true,
        element: <Aluno />,
      },
      {
        path: "perfil",
        element: <Perfil />,
      },
      {
        path: "curriculo",
        element: <Curriculo />,
      },
      {
        path: "curriculo/preview",
        element: <CurriculoPreview />,  
      },
      {
        path: "curriculo/editar",
        element: <EditarCurriculo />,  
      },
    ],
  },
  {
    path: "/professor",
    element: <ProfessorLayout />,
    children: [
      {
        index: true,
        element: <Professor />,
      },
      {
        path: "turmas",
        element: <Turmas />,
      },
      {
        path: "anotacao",
        element: <Anotacao />,
      },
    ],
  },
  {
    path: "/secretaria",
    element: <SecretariaLayout />,
    children: [
      {
        index: true,
        element: <Secretaria />,
      },
      {
        path: "listaDeTurmas",
        element: <ListaDeTurmas />,
      },
      {
        path: "alunos",
        element: <Alunos />,
      },
      {
        path: "alunos/cadastrar",
        element: <CadastroAluno />,
      },
      {
        path: "alunos/editar",
        element: <EditarAluno />,
      },
      {
        path: "professores/cadastrar",
        element: <CadastroProfessor />,
      },
      {
        path: "empresas",
        element: <Empresas />,
      },
      {
        path: "vagas",
        element: <Vagas />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}