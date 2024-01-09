import React from "react";
import SidenavPro from "../component/Sidebar/SidenavPro";
import Navbar from "../component/Navbar/Navbar";
import Box from '@mui/material/Box';
import AccordionDashpro from "../component/Accordion/AccordionDashpro";
import Typography from '@mui/material/Typography';
import CamScreenbot from "../component/CamScreen/CamScreenbot";
import CamScreentop from "../component/CamScreen/CamScreentop";
import Streamchat from "../component/ChatScreen/Streamchat";
import Footer from "../component/Footer/Footer";
import styles from "../assets/css/Dash.module.css";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Face6Icon from '@mui/icons-material/Face6';

export default function Streamingpro() {
    return (
        <>
            <div className={styles.bgcolor}>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <SidenavPro />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 79 + "vh" }}>
                                    <CardContent>
                                        <CamScreentop />
                                    </CardContent>
                                    <CardContent>
                                        <CamScreenbot />
                                    </CardContent>
                                </Card>
                                <Stack spacing={2} direction="row">
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ height: 79 + "vh" }}>
                                        <CardContent>
                                            <Streamchat />
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Footer />
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </div>
        </>

    )
}