import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* / に対応 */}
          <Route path="about" element={<About />} /> {/* /about に対応 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
