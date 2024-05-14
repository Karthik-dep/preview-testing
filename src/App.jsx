import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import AppLayout from "./Components/AppLayout";
import GlobalStyle from "./Components/UI/GlobalStyle";
import Settings from "./Components/pages/Settings/Settings";
import Profile from "./Components/pages/Profile/Profile";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
