import React from "react";
import SidenavStu from "../component/Sidebar/SidenavStu";
import Navbar from "../component/Navbar/Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

export default function Homestu() {
    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: "flex" }}>
                <SidenavStu />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Stack spacing={2} direction="row">
                                <Card sx={{ minWidth: 49 + "%", height: 150 }} className={styles.gradient}>
                                    <CardContent>
                                        <div className={styles.iconstylewhite}>
                                            <WavingHandIcon />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                            Hello!
                                        </Typography>
                                        <Typography variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                            Let's learn our lectures more freely!
                                            This program will help you manage your lectures and answer questions!
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 49 + "%", height: 150 }} className={styles.gradient}>
                                    <CardContent>
                                        <div className={styles.iconstylewhite}>
                                            <Face6Icon />
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                            Student
                                        </Typography>
                                        <Typography variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                            Upload the Q&A of the lecture to the site and leave the answers to us!
                                        </Typography>
                                    </CardContent>
                                </Card>
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
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ height: 60 + "vh" }}>
                                <CardContent>
                                    <div className={styles.paddingall}>
                                        <span className={styles.univercitytitle}>How Using?</span>
                                        <br />
                                    </div>
                                    <AccordionDashstu />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Footer />
                </Box>
            </Box>
        </>

    )
}