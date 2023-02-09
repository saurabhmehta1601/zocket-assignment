import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateNewCampaign from "./pages/CreateNewCampaign"
import AllCampaigns from "./pages/AllCampaigns"
import Home from "./pages/Home"
import Customers from "./pages/Customers"
import Products from "./pages/Products"
import DashboardLayout from "./components/Layout/DashboardLayout"

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/campaign" element={<AllCampaigns />} />
          <Route path="/campaign/create" element={<CreateNewCampaign />} />
        </Routes>

      </DashboardLayout>
    </BrowserRouter>
  )
}

export default App
