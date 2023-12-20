import React, { useState, useEffect } from "react";
import ChatScreen from "./component/ChatScreen/ChatScreen";
import FileUpload from "./component/FileUpload/FileUpload";
import CamScreen from "./component/CamScreen/CamScreen";

const App = () => {
  return (
    <div>
      <ChatScreen />
      <FileUpload />
      <CamScreen />
    </div>
  );
};

export default App;
