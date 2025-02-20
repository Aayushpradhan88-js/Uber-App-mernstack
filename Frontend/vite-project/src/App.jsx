/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import UserProtectWrapper from "./pages/UserProtectWrapper";

const App = () => (
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/signup" element={<UserSignup />} />
    <Route path="/login" element={<UserLogin />} />
    <Route path="/captain-signup" element={<CaptainSignup />} />
    <Route path="/captain-login" element={<CaptainLogin />} />
    <Route path="/home" element={
      <UserProtectWrapper>
        <Home />
      </UserProtectWrapper>
    } />
    <Route path="/logout" element={<UserProtectWrapper>

    </UserProtectWrapper>}
    />

  </Routes>
);

export default App;

