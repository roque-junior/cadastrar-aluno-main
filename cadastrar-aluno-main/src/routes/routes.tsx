import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import Cadastrar from "../pages/Cadastrar";
import { Avaliacao } from "../pages/Avaliacao";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/cadastrar',
        element: <Cadastrar />
    },
    {
        path: '/avaliacao',
        element: <Avaliacao />
    }

])