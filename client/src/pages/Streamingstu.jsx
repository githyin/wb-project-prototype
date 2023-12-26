import React from "react";
import SidenavStu from "../component/Sidebar/SidenavStu";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CamScreen from "../component/CamScreen/CamScreen";

export default function Streamingpro(){
    return(
        <>
        <Box sx={{display: "flex"}}>
            <SidenavStu />
            <h1>Streaming</h1>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Typography paragraph>
                이 페이지는 학생으로 로그인 했을 때 나오는 페이지입니다.
                </Typography>
                <Typography paragraph>
                잘가
                </Typography>
                <CamScreen />
            </Box>
        </Box>
        </>
        
    )
}