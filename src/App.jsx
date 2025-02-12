import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';

//Pages
import Home from './views/Home';
import StagePage from './views/StagePage';

const router = createBrowserRouter([
  {
    path: "/musicfest/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "stages",
        element: <StagePage />,
      },
      {
        path: "stages/:stageId",
        element: < StagePage />,
      },
      {
        path: "stages/:stageCategory",
        element: < StagePage />,
      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
