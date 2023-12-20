import React, { useState, useEffect } from "react";
import ChatScreen from "./component/ChatScreen/ChatScreen";
import FileUpload from "./component/FileUpload/FileUpload";
import CamScreen from "./component/CamScreen/CamScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatScreen />} />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route path="/camscreen" element={<CamScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
