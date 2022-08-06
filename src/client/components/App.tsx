import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopDetail from "./ShopDetail";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/shops/:id" element={<ShopDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
