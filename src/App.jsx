import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';

//Pages
import Home from './views/Home';
import StagePage from './views/StagePage';
import NotFound from './views/NotFound';

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
        errorElement: <NotFound />
      },
      {
        path: "stages/performance/:stageId",
        element: < StagePage />,
        errorElement: <NotFound />
      },
      {
        path: "stages/:stageCategory",
        element: < StagePage />,
        errorElement: <NotFound />
      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
