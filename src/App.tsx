import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AccountPage from './pages/AccountPage'
import AdminPage from './pages/AdminPage'
import AvengersPage from './pages/AvengersPage'
import Ben10Page from './pages/Ben10Page'
import CheckoutPage from './pages/CheckoutPage'
import FCPage from './pages/FCPage'
import HomePage from './pages/HomePage'
import HouseOfDragonPage from './pages/HouseOfDragonPage'
import JournalPage from './pages/JournalPage'
import LookbookPage from './pages/LookbookPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ShopPage from './pages/ShopPage'
import StrangerThingsPage from './pages/StrangerThingsPage'
import ThemesPage from './pages/ThemesPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/themes" element={<ThemesPage />} />
        <Route path="/themes/ben-10" element={<Ben10Page />} />
        <Route path="/themes/avengers" element={<AvengersPage />} />
        <Route path="/themes/fc" element={<FCPage />} />
        <Route path="/themes/stranger-things" element={<StrangerThingsPage />} />
        <Route path="/themes/house-of-dragon" element={<HouseOfDragonPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/lookbook" element={<LookbookPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
