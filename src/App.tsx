import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cadastrar } from './pages/Cadastrar'
import { Provider } from 'react-redux'
import store from './store'
import { Container, EstiloGlobal } from './styles'
import { Hero } from './containers/Hero'
function App() {
  const endpoints = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/cadastrar',
      element: <Cadastrar />
    }
  ])
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Hero />
      <Container />
      <RouterProvider router={endpoints} />
    </Provider>
  )
}

export default App
