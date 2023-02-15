import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Success } from './pages/Success'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sucess" element={<Success />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
