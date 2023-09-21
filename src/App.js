import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<LoginPage></LoginPage>}></Route>
          <Route path="/gallery" element={<GalleryPage></GalleryPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App  