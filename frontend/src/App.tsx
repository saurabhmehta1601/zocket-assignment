import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateNewCampaign from "./pages/CreateNewCampaign"
import AllCampaigns from "./pages/AllCampaigns"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/campaign/all" element={<AllCampaigns />} />
        <Route path="/campaign/create" element={<CreateNewCampaign />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
