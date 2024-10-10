import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, createBrowserRouter, RouterProvider
} from 'react-router-dom'

//pages

import App from './App'
import Error from './routes/Error/Error'
import Home from './routes/Home/Home';
import RecipeDetails from './routes/RecipeDetails/RecipeDetails'
import Recipes from './routes/Recipes/Recipes'

const router = createBrowserRouter([
  {
    path: "/receitas/",
    element: <App />,
    errorElement: <Error />,

    children: [
      {
        path: "/receitas/home",
        element: <Home />
      },
      {
        path: "/receitas/recipe/:id",
        element: <RecipeDetails />
      },
      {
        path: "/receitas/search",
        element: <Recipes />
      },
    ],
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router} /> 

  </StrictMode>,
)
