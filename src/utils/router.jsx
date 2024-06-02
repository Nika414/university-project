import { createBrowserRouter } from 'react-router-dom';
import Main from '../views/Main/Main';
import DisciplineList from '../views/DisciplineList/DisciplineList';
import Discipline from '../views/DisciplineDetails/Discipline';
import App from '../App';
import DepartmentWorkList from '../views/DepartmentWorkList/DepartmentWorkList';
import DepartmentWorkDetails from '../views/DepartmentWorkDetails/DepartmentWorkDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'discipline/:id',
        element: <Discipline />,
      },
      {
        path: 'disciplines',
        element: <DisciplineList />,
      },
      {
        path: 'departments',
        element: <DepartmentWorkList />,
      },
      {
        path: 'department/:id',
        element: <DepartmentWorkDetails />,
      },
    ],
  },
]);
