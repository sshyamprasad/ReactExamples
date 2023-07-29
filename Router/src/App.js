import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Products from './pages/Products';

const router = createBrowserRouter(
  [
    {path: '/', element: <HomePage />},
    {path: '/products', element: <Products />},
  ]
)

function App() {
  return <RouterProvider router={router} />;
  // return <HomePage />
}

export default App;
