import React from "react";
import SidenavPro from '../component/Sidebar/SidenavPro';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepro from "../pages/Homepro";
import Streaming from "../pages/Streaming";
import Fileupload from "../pages/Fileupload";

function Test() {

return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/homepro" exact element={<Homepro/>}/>
          <Route path="/streaming" exact element={<Streaming/>}/>
          <Route path="/fileupload" exact element={<Fileupload/>}/>
        </Routes>
      </BrowserRouter>
    </>
);
}

export default Test;