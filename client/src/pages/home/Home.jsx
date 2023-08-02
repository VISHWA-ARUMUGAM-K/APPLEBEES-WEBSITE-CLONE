import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import LoginPage from "../loginPage/LoginPage";

const Home = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="Login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
