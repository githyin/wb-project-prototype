import React, { useState, useEffect } from "react";
import ChatScreen from "./component/ChatScreen/ChatScreen";
import FileUpload from "./component/FileUpload/FileUpload";
import CamScreen from "./component/CamScreen/CamScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import { SocketContext } from './socketContext';

const App = () => {
  const socket = io.connect("http://localhost:5000");
  return (
    <SocketContext.Provider value={socket}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatScreen />} />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route path="/camscreen" element={<CamScreen />} />
      </Routes>
    </BrowserRouter>
    </SocketContext.Provider>
  );
};


export default App;
