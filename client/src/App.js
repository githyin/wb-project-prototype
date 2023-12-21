import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChatScreen from "./component/ChatScreen/ChatScreen";
import FileUpload from "./component/FileUpload/FileUpload";
import CamScreen from "./component/CamScreen/CamScreen";
import Home from "./routes/home";
import Test from "./routes/test";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Test/>} />
        <Route path="/chatscreen" element={<ChatScreen/>} />
        <Route path="/file-upload" element={<FileUpload/>} />
        <Route path="/cam-screen" element={<CamScreen/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
