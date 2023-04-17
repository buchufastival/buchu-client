import "./App.scss";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail/Detail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
