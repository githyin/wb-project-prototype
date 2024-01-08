import React, { useState } from "react";
import { Paper, Grid, IconButton, Button } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

function Stream(socket) {
    // 비디오 스트림 상태 배열 관리
    const [videoStreams, setVideoStreams] = useState([]);

    // 비디오 스트림 추가 핸들러
    const addVideoStream = () => {
        setVideoStreams(prevStreams => [...prevStreams, {}]);
    };

    return (
        <Paper elevation={3}>
            <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'scroll', maxHeight: '180px' }}>
                {videoStreams.map((stream, index) => (
                    <div
                        style={{ minWidth: "160px", height: "160px", backgroundColor: "#ddd", margin: "10px" }}
                        key={index}
                    >
                        {/* 여기에 비디오 스트림을 렌더링 */}
                        <video style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>
                    </div>
                ))}
            </div>
            {/* 비디오 스트림 추가 버튼 */}
            <Button variant="contained" color="primary" onClick={addVideoStream} style={{ marginTop: "20px" }}>
                비디오 스트림 추가
            </Button>
        </Paper>
    );
}

export default Stream;
