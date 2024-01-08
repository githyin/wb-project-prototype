import React from "react";
import SidenavStu from "../component/Sidebar/SidenavStu";
import Navbar from "../component/Navbar/Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CamScreenbot from "../component/CamScreen/CamScreenbot";
import CamScreentop from "../component/CamScreen/CamScreentop";
import AccordionDashstu from "../component/Accordion/AccordionDashstu";
import Footer from "../component/Footer/Footer";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import styles from "../assets/css/Dash.module.css";
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Face6Icon from '@mui/icons-material/Face6';

export default function Streamingstu() {
    return (
        <>
            <div className={styles.bgcolor}>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <SidenavStu />
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
                                    <Card className={styles.gradientlight}>
                                        <Stack spacing={2} direction="row">
                                            <div className={styles.iconstylewhite}>
                                                <SchoolIcon />
                                            </div>
                                            <div className={styles.paddingall}>
                                                <span className={styles.univercitytitle}>University</span>
                                                <br />
                                                <span className={styles.univercitysubtitle}>WooSong Univ.</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card className={styles.gradientlight}>
                                        <Stack spacing={2} direction="row">
                                            <div className={styles.iconstylewhite}>
                                                <MenuBookIcon />
                                            </div>
                                            <div className={styles.paddingall}>
                                                <span className={styles.univercitytitle}>Lecture</span>
                                                <br />
                                                <span className={styles.univercitysubtitle}>BIT Project</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card sx={{ height: 60.7 + "vh" }}>
                                        <CardContent>
                                            <div className={styles.paddingall}>
                                                <span className={styles.univercitytitle}>How Using?</span>
                                                <br />
                                            </div>
                                            <AccordionDashstu />
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