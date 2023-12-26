import React from "react";
import SidenavStu from "../component/Sidebar/SidenavStu";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChatScreen from "../component/ChatScreen/ChatScreen";

export default function chatbot(){
    return(
        <>
        <Box sx={{display: "flex"}}>
            <SidenavStu />
            <h1>ChatBot</h1>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography paragraph>
        이 페이지는 교수로 로그인 했을 때 나오는 페이지입니다.
        </Typography>
        <Typography paragraph>
        업로드
        </Typography>
        <ChatScreen />
            </Box>
        </Box>
        </>
        
    )
}