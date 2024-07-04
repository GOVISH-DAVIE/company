"use client"
import { basic } from "@/utils/theme"
import { Box, Grid, Typography } from "@mui/material"
import Carousel from "react-material-ui-carousel"

const ServicesSection = () => {

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

                <Grid item sm={4} md={4} >
                    <Grid container>
                        <Grid item sm={4} md={4} >
                            <Box sx={{
                                backgroundImage: "url(/1.png)",
                                height: '80px',
                                width: '80px',
                                backgroundColor: '#FFF856',
                                borderRadius: '10px'
                            }} />
                        </Grid>
                        <Grid item sm={8} md={8} >
                            <Typography sx={{
                                // mt: ,
                                fontWeight: 600,
                                color: basic,
                                backgroundSize: "contain",
                                display: { sm: 'block', xs: 'none' }

                            }} variant="h5">
                                Architect your Solution
                            </Typography>
                            <Typography sx={{
                                mt: 1,
                                // fontWeight: 900,
                                color: basic,
                                display: { sm: 'block', xs: 'none' }

                            }} variant="body2">
                                Our team in on your operational, technological, and strategic challenges through
                                an in-depth understanding of your
                                business. We design a strategic roadmap to guide your result-oriented goals.
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>



                <Grid item sm={4} md={4} >
                    <Grid container>
                        <Grid item sm={4} md={4} >
                            <Box sx={{
                                backgroundImage: "url(/2.png)",
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '80px',
                                width: '80px',
                                backgroundColor: '#FFF856',
                                borderRadius: '10px'
                            }} />
                        </Grid>
                        <Grid item sm={8} md={8} >
                            <Typography sx={{
                                // mt: ,
                                fontWeight: 600,
                                color: basic,
                                backgroundSize: "contain",
                                display: { sm: 'block', xs: 'none' }

                            }} variant="h5">
                                Engineer your Solution
                            </Typography>
                            <Typography sx={{
                                mt: 1,
                                // fontWeight: 900,
                                color: basic,
                                display: { sm: 'block', xs: 'none' }

                            }} variant="body2">
                                We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create
                                the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and
                                industry-specific experience. </Typography>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item sm={4} md={4} >
                    <Grid container>
                        <Grid item sm={4} md={4} >
                            <Box sx={{
                                backgroundImage: "url(/3.png)",
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '80px',
                                width: '80px',
                                backgroundColor: '#FFF856',
                                borderRadius: '10px'
                            }} />
                        </Grid>
                        <Grid item sm={8} md={8} >
                            <Typography sx={{
                                // mt: ,
                                fontWeight: 600,
                                color: basic,
                                backgroundSize: "contain",
                                display: { sm: 'block', xs: 'none' }

                            }} variant="h5">
                                ReEngineer your Business Process
                            </Typography>
                            <Typography sx={{
                                mt: 1,
                                // fontWeight: 900,
                                color: basic,
                                display: { sm: 'block', xs: 'none' }

                            }} variant="body2">

                                Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This
                                process places the foundation for a more efficient and strong business that can meet demands at scale.
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>





            </Grid>
        </Box>

        <Box sx={{
            display: { xs: "inherit", sm: 'none' },

            mx: 2
        }}>
            <Typography sx={{
                // mt: ,
                fontWeight: 600,
                color: basic,
                backgroundSize: "contain",
                // display: { sm: 'block', xs: 'none' }

            }} variant="body1">
                Solutions
            </Typography>
            <Typography sx={{
                mt: 1.5,
                mb: 1.5,
                fontWeight: 600,
                color: basic,
                backgroundSize: "contain",
                // display: { sm: 'block', xs: 'none' }

            }} variant="h5">
                Software Solutions, with expert software engineering teams
            </Typography>
            <Typography sx={{
                mt: 1.5,
                mb: 4,
                // fontWeight: 600,
                color: basic,
                backgroundSize: "contain",
                // display: { sm: 'block', xs: 'none' }

            }} variant="body2">
                We specialize in helping you build a team of expert developers, testers, and leaders.
            </Typography>
            <Carousel

            >
                <Grid container p={1} >
                    <Grid item sm={12} xs={12} md={12} display={'flex'} justifyContent={'center'} alignContent={'center'} >
                        <Box sx={{
                            backgroundImage: "url(/1.png)",
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
                            Architect your Solution
                        </Typography>
                        <Typography sx={{
                            mt: 1,
                            // fontWeight: 900,
                            color: basic,
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="body2">

                            Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your
                            business. We design a strategic roadmap to guide your result-oriented goals. </Typography>

                    </Grid>
                </Grid>
                <Grid container p={1} >
                    <Grid item sm={12} xs={12} md={12} display={'flex'} justifyContent={'center'} alignContent={'center'} >
                        <Box sx={{
                            backgroundImage: "url(/2.png)",
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
                            Engineer your Solution
                        </Typography>
                        <Typography sx={{
                            mt: 1,
                            // fontWeight: 900,
                            color: basic,
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="body2">

                            We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create
                            the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and
                            industry-specific experience.
                        </Typography>

                    </Grid>
                </Grid>
                <Grid container p={1} >
                    <Grid item sm={12} xs={12} md={12} display={'flex'} justifyContent={'center'} alignContent={'center'} >
                        <Box sx={{
                            backgroundImage: "url(/3.png)",
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
                            ReEngineer your Business Process
                        </Typography>
                        <Typography sx={{
                            mt: 1,
                            // fontWeight: 900,
                            color: basic,
                            // display: { sm: 'block', xs: 'none' }

                        }} variant="body2">

                            Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This
                            process places the foundation for a more efficient and strong business that can meet demands at scale.
                        </Typography>

                    </Grid>
                </Grid>

            </Carousel>
        </Box>

    </section>
}

export default ServicesSection