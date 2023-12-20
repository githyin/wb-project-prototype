import React, { useState, useEffect } from "react";
import ChatScreen from "./component/ChatScreen/ChatScreen";
import FileUpload from "./component/FileUpload/FileUpload";

const App = () => {
  return (
    <div>
      <ChatScreen />
      <FileUpload />
    </div>
  );
};

export default App;
