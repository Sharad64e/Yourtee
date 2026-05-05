import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import HomePage from './pages/HomePage'
import HouseOfDragonPage from './pages/HouseOfDragonPage'
import JournalPage from './pages/JournalPage'
import LookbookPage from './pages/LookbookPage'
import ShopPage from './pages/ShopPage'
import StrangerThingsPage from './pages/StrangerThingsPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/themes/stranger-things" element={<StrangerThingsPage />} />
        <Route path="/themes/house-of-dragon" element={<HouseOfDragonPage />} />
        <Route path="/lookbook" element={<LookbookPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
