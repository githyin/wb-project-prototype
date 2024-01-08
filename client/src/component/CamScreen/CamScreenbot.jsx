import React from "react";
import { Paper, Grid, IconButton, Typography } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

function Stream(socekt) {
  // 비디오 및 오디오 상태 관리를 위한 상태 변수
  const [videoEnabled, setVideoEnabled] = React.useState(true);
  const [audioEnabled, setAudioEnabled] = React.useState(true);

  // 비디오 및 오디오 토글 핸들러
  const toggleVideo = () => setVideoEnabled(!videoEnabled);
  const toggleAudio = () => setAudioEnabled(!audioEnabled);

  return (
    <Paper elevation={3}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={12}>
          {/* 화상 채팅 비디오 영역 */}
          <div
            style={{ width: "100%", height: "460px", backgroundColor: "#ddd" }}
          >
            {/* 여기에 비디오 스트림을 렌더링 */}
            <video style={{width: "100%", height: "100%", objectFit: "cover"}}></video>
          </div>
        </Grid>
        <Grid item xs={12}>
          {/* 컨트롤 버튼들 */}
          <IconButton onClick={toggleVideo} color="primary">
            {videoEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
          </IconButton>
          <IconButton onClick={toggleAudio} color="primary">
            {audioEnabled ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Stream;
