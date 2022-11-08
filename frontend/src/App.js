import "./styles/App.scss";
import { Routes, Route, Outlet } from "react-router-dom";

// Components
import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import MainContainer from "./components/Containers/MainContainer";

// Pages
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <PageContainer optionClass={"pageContainer"}>
        <Navbar />
        <div className="mobileMenu">
          <MobileNavbar />
        </div>
        <Routes>
          {/* Auth page */}
          <Route path="/auth" element={<Auth />} />
          {/* Protected Routes */}
          <Route element={<Outlet />}>

            {/* Home */}
            <Route path="/" element={<Home/>}/>
            {/* 404 */}
            <Route
              path="/*"
              element={
                <MainContainer>
                  <span style={{ fontSize: "1.2rem" }}>404 Page Not Found</span>
                </MainContainer>
              }
            />
          </Route>
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
