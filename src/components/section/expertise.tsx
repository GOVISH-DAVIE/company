"use client"
import { basic } from "@/utils/theme"
import { Box, Grid, Typography } from "@mui/material"
import Carousel from "react-material-ui-carousel"

const ExpertiseSection = () => {

    return <section>

        <Box sx={{
            display: { sm: "inherit", xs: 'none' },
        }}>

            <Grid container sx={{
                height: { sm: '40vh', xs: "110vh" },
                width: { sm: '90vw', xs: "98vw" },
                mt: { sm: 6, xs: 0 },
                ml: { sm: 0, xs: .5 },
                pl: "5vw"
            }} spacing={2}>
                <Grid item mt={3} sm={12} md={12} >

                    <Typography sx={{
                        // mt: ,
                        fontWeight: 600,
                        color: basic,
                        backgroundSize: "contain",
                        // display: { sm: 'block', xs: 'none' }

                    }} variant="body1">
                        Expertise
                    </Typography>
                </Grid>
                <Grid item sm={12} md={12} >

                    <Typography sx={{
                        // mt: ,
                        fontWeight: 600,
                        color: basic,
                        backgroundSize: "contain",
                        // display: { sm: 'block', xs: 'none' }

                    }} variant="h4">
                        Hire Permanent and Remote <br /> Developers
                    </Typography>
                </Grid>
                <Grid item mb={9} sm={12} md={12} >

                    <Typography sx={{
                        // mt: ,
                        // fontWeight: 600,
                        color: basic,
                        backgroundSize: "contain",
                        // display: { sm: 'block', xs: 'none' }

                    }} variant="body1">
                        From full-time remote engineering teams to hourly <br /> contractors, work with remote devs as needed </Typography>
                </Grid>

                <Grid item sm={3} md={3} >
                    <Grid container>
                        <Grid item sm={12} md={12} >
                            <Box sx={{
                                backgroundImage: "url(/21.png)",
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '80px',
                                width: '80px',
                                backgroundColor: '#FFF856',
                                borderRadius: '10px'
                            }} />
                        </Grid>
                        <Grid item mt={2} sm={12} md={12} >
                            <Typography sx={{
                                // mt: ,
                                fontWeight: 600,
                                color: basic,
                                backgroundSize: "contain",
                                display: { sm: 'block', xs: 'none' }

                            }} variant="h5">
                                Dedicated Teams
                            </Typography>
                            <Typography sx={{
                                mt: 1,
                                // fontWeight: 900,
                                color: basic,
                                display: { sm: 'block', xs: 'none' }

                            }} variant="body2">
                                Find your next team member </Typography>

                        </Grid>
                    </Grid>
                </Grid>



                <Grid item sm={3} md={3} >
                    <Grid container>
                        <Grid item sm={12} md={12} >
                            <Box sx={{
                                backgroundImage: "url(/22.png)",
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '80px',
                                width: '80px',
                                backgroundColor: '#FFF856',
                                borderRadius: '10px'
                            }} />
                        </Grid>
                        <Grid item mt={2} sm={12} md={12} >
                            <Typography sx={{
                                // mt: ,
                                fontWeight: 600,
                                color: basic,
                                backgroundSize: "contain",
                                display: { sm: 'block', xs: 'none' }

                            }} variant="h5">
                                Staff Augmentation
                            </Typography>
                            <Typography sx={{
                                mt: 1,
                                // fontWeight: 900,
                                color: basic,
                                display: { sm: 'block', xs: 'none' }

                            }} variant="body2">
                                Build a distributed development team
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item sm={3} md={3} >
                    <Grid container>
                        <Grid item sm={12} md={12} >
                            <Box sx={{
                                backgroundImage: "url(/23.png)",
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '80px',
                                width: '80px',
                                backgroundColor: '#FFF856',
                                borderRadius: '10px'
                            }} />
                        </Grid>
                        <Grid item mt={2} sm={12} md={12} >
                            <Typography sx={{
                                // mt: ,
                                fontWeight: 600,
                                color: basic,
                                backgroundSize: "contain",
                                display: { sm: 'block', xs: 'none' }

                            }} variant="h5">
                                Software Outsourcing
                            </Typography>
                            <Typography sx={{
                                mt: 1,
                                // fontWeight: 900,
                                color: basic,
                                display: { sm: 'block', xs: 'none' }

                            }} variant="body2">End-to-End Software Development Outsourcing Solutions </Typography>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item sm={3} md={3} >
                    <Grid container>
                        <Grid item sm={12} md={12} >
                            <Box sx={{
                                backgroundImage: "url(/24.png)",
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '80px',
                                width: '80px',
                                backgroundColor: '#FFF856',
                                borderRadius: '10px'
                            }} />
                        </Grid>
                        <Grid item mt={2} sm={12} md={12} >
                            <Typography sx={{
                                // mt: ,
                                fontWeight: 600,
                                color: basic,
                                backgroundSize: "contain",
                                display: { sm: 'block', xs: 'none' }

                            }} variant="h5">
                                Remote Office
                            </Typography>
                            <Typography sx={{
                                mt: 1,
                                // fontWeight: 900,
                                color: basic,
                                display: { sm: 'block', xs: 'none' }

                            }} variant="body2">
                                Open your own remote development center and grow your business
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>





            </Grid>
        </Box>

        <Box sx={{
            display: { xs: "inherit", sm: 'none' },

            mx: 2,
            mt: 2
        }}>
            <Typography sx={{
                // mt: ,
                fontWeight: 600,
                color: basic,
                backgroundSize: "contain",
                // display: { sm: 'block', xs: 'none' }

            }} variant="body1">
                Expertise
            </Typography>
            <Typography sx={{
                mt: 1,
                fontWeight: 600,
                color: basic,
                backgroundSize: "contain",
                // display: { sm: 'block', xs: 'none' }

            }} variant="h5">
                Hire Permanent and Remote <br /> Developers
            </Typography>
            <Typography sx={{
                mt: 2,
                mb: 8,
                // fontWeight: 600,
                color: basic,
                backgroundSize: "contain",
                // display: { sm: 'block', xs: 'none' }

            }} variant="body1">
                From full-time remote engineering teams to hourly   contractors, work with remote devs as needed </Typography>


            <Carousel

            >
                <Grid container p={1} >
                    <Grid item sm={12} xs={12} md={12} display={'flex'} justifyContent={'center'} alignContent={'center'} >
                        <Box sx={{
                            backgroundImage: "url(/21.png)",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '80px',
                            width: '80px',
                            backgroundColor: '#FFF856',
                            borderRadius: '10px'
                        }} />
                    </Grid>
                    <Grid item mt={1} sm={8} md={8} >
                        <Typography sx={{
                            // mt: ,
                            fontWeight: 600,
                            color: basic,
                            backgroundSize: "contain",
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="h5">
                            Dedicated Teams
                        </Typography>
                        <Typography sx={{
                            mt: 1,
                            // fontWeight: 900,
                            color: basic,
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="body2">

                            Find your next team member
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container p={1} >
                    <Grid item sm={12} xs={12} md={12} display={'flex'} justifyContent={'center'} alignContent={'center'} >
                        <Box sx={{
                            backgroundImage: "url(/22.png)",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '80px',
                            width: '80px',
                            backgroundColor: '#FFF856',
                            borderRadius: '10px'
                        }} />
                    </Grid>
                    <Grid item mt={1} sm={8} md={8} >
                        <Typography sx={{
                            // mt: ,
                            fontWeight: 600,
                            color: basic,
                            backgroundSize: "contain",
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="h5">
                            Staff Augmentation
                        </Typography>
                        <Typography sx={{
                            mt: 1,
                            // fontWeight: 900,
                            color: basic,
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="body2">

                            Build a distributed development team
                        </Typography>

                    </Grid>
                </Grid>
                <Grid container p={1} >
                    <Grid item sm={12} xs={12} md={12} display={'flex'} justifyContent={'center'} alignContent={'center'} >
                        <Box sx={{
                            backgroundImage: "url(/23.png)",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '80px',
                            width: '80px',
                            backgroundColor: '#FFF856',
                            borderRadius: '10px'
                        }} />
                    </Grid>
                    <Grid item mt={1} sm={8} md={8} >
                        <Typography sx={{
                            // mt: ,
                            fontWeight: 600,
                            color: basic,
                            backgroundSize: "contain",
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="h5">
                            Software Outsourcing
                        </Typography>
                        <Typography sx={{
                            mt: 1,
                            // fontWeight: 900,
                            color: basic,
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="body2">

                            End-to-End Software Development Outsourcing Solutions
                        </Typography>

                    </Grid>
                </Grid>
                <Grid container p={1} >
                    <Grid item sm={12} xs={12} md={12} display={'flex'} justifyContent={'center'} alignContent={'center'} >
                        <Box sx={{
                            backgroundImage: "url(/4.png)",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '80px',
                            width: '80px',
                            backgroundColor: '#FFF856',
                            borderRadius: '10px'
                        }} />
                    </Grid>
                    <Grid item mt={1} sm={8} md={8} >
                        <Typography sx={{
                            // mt: ,
                            fontWeight: 600,
                            color: basic,
                            backgroundSize: "contain",
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="h5">
                            Remote Office
                        </Typography>
                        <Typography sx={{
                            mt: 1,
                            // fontWeight: 900,
                            color: basic,
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="body2">
                            Open your own remote development center and grow your business
                        </Typography>

                    </Grid>
                </Grid>

            </Carousel>
        </Box>

    </section>
}

export default ExpertiseSection