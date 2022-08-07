import Home from "./Home";
import OwnerLogin from "./OwnerLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopDetail from "./ShopDetail";
import OwnerSignUp from "./OwnerSignUp";
import ShopCreate from "./ShopCreate";
import { PrivateRoute } from "../AuthRouter";
import OwnerLogout from "./OwnerLogout";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/owners/login" element={<OwnerLogin />}></Route>
          <Route path="/owners/logout" element={<OwnerLogout />}></Route>
          <Route path="/owners/new" element={<OwnerSignUp />}></Route>
          <Route
            path="/shops/new"
            element={
              <PrivateRoute>
                <ShopCreate />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/shops/:id" element={<ShopDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
