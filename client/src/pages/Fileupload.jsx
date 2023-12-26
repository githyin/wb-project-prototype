import React from "react";
import SidenavPro from "../component/Sidebar/SidenavPro";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FileUpload from "../component/FileUpload/FileUpload";

export default function Fileupload(){
    return(
        <>
        <Box sx={{display: "flex"}}>
            <SidenavPro />
            <h1>Fileupload</h1>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography paragraph>
        이 페이지는 교수로 로그인 했을 때 나오는 페이지입니다.
        </Typography>
        <Typography paragraph>
        업로드
        </Typography>
        <FileUpload />
            </Box>
        </Box>
        </>
        
    )
}