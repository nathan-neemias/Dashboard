import * as React from 'react'
import './assets/fonts/inter.css'
import './assets/fonts/material.css'
import './assets/fonts/icofont/icofont.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/styles.scss'
import './i18n.js'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/Themes'
import { SidebarProvider } from './context/Sidebar'
import { LoaderProvider } from './context/Preloader'
import { TranslatorProvider } from './context/Translator'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navigate } from 'react-router-dom' // Importe o componente Navigate para redirecionamento
import { LoginPage } from './pages/auth'
import { ErrorPage } from './pages/others'
import {
  EcommercePage,
  UserListPage,
  ProfessionalPage,
  MyAccountPage,
  IndicationPage,
  ClientViewPage,
  ClientEditPage,
  ProfessionalEditPage,
  CreateUsers,
} from './pages/main'
import ProfessionalViewPage from './pages/main/ProfessionalViewPage'
import RequestClientPage from './pages/main/RequestClientPage'
import RequestProfessionalPage from './pages/main/RequestProfessionalPage'

const router = createBrowserRouter([
  // Redirecionar a rota principal "/" para "/home"
  { path: '/', element: <Navigate to="/home" replace /> },
  { path: '/home', element: <EcommercePage /> },
  { path: '/user-list', element: <UserListPage /> },
  { path: '/professional-list', element: <ProfessionalPage /> },
  { path: '/my-account', element: <MyAccountPage /> },
  { path: '/professional-view', element: <ProfessionalViewPage /> },
  { path: '/client-view', element: <ClientViewPage /> },
  { path: '/professional-edit', element: <ProfessionalEditPage /> },
  { path: '/client-edit', element: <ClientEditPage /> },
  { path: '/requestClient', element: <RequestClientPage /> },
  { path: '/requestProfessional', element: <RequestProfessionalPage /> },
  { path: '/create', element: <CreateUsers /> },
  { path: '/indications', element: <IndicationPage /> },
  { path: '/error', element: <ErrorPage /> },
])

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <LoaderProvider>
      <TranslatorProvider>
        <SidebarProvider>
          <RouterProvider router={router} />
        </SidebarProvider>
      </TranslatorProvider>
    </LoaderProvider>
  </ThemeProvider>,
)
