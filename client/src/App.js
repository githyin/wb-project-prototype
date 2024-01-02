import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/home";
import Homepro from "./pages/Homepro";
import Homestu from "./pages/Homestu";
import Streamingpro from "./pages/Streamingpro";
import Streamingstu from "./pages/Streamingstu";
import Fileupload from "./pages/Fileupload";
import Chatbot from "./pages/Chatbot";

const App = () => {
  return (
<>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/homepro" exact element={<Homepro/>}/>
    <Route path="/homestu" exact element={<Homestu/>}/>
    <Route path="/streamingpro" exact element={<Streamingpro/>}/>
    <Route path="/streamingstu" exact element={<Streamingstu/>}/>
    <Route path="/fileupload" exact element={<Fileupload/>}/>
    <Route path="/chatbot" exact element={<Chatbot/>}/>
  </Routes>
</BrowserRouter>
</>
  );
};


export default App;
