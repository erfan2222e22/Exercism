
import { createRoot } from 'react-dom/client'
import routs from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <RouterProvider router={routs} />
)