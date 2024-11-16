/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import GameOfLife from './components/conways/GameOfLife'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />} >
    <Route index element={<Home />} ></Route>
    <Route path="golf" element={<GameOfLife />} />
  </Route>)
)

export default router