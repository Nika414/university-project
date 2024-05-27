import { createBrowserRouter } from 'react-router-dom';
import Main from '../views/Main/Main';
import DisciplineList from '../views/DisciplineList/DisciplineList';
import Discipline from '../views/DisciplineDetails/Discipline';
import App from '../App';

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
    ],
  },
]);
