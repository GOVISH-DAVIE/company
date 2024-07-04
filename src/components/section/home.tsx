"use client"
import { basic } from "@/utils/theme"
import { ArrowForwardIos, ArrowForwardIosRounded, ArrowRight } from "@mui/icons-material"
import { Grid, Container, Box, Typography, Button } from "@mui/material"

const LandingSection = () => {
    return <section>

        <Grid container spacing={2}  sx={{
            height:{sm: '90vh', xs:"110vh"},
            width: {sm:'90vw',xs:"98vw"},
            mt:{sm:2, xs:0},
            ml:{sm:0, xs:.5}
        }}>
            <Grid item md={3}></Grid>
            <Grid item md={9} xs={12} sx={(theme) => ({
                backgroundRepeat: "no-repeat",
                height:{xs:'40vh', sm:'inherit'}, 
                backgroundSize: {xs:'contain', sm:'contain'},
                backgroundImage: "url(/h1.png)", 
            })} >

            </Grid>
            <Box sx={(theme)=>({
                width: {xs:"100vw",sm:"35vw"},
                height: "55vh",
                background: 'white',
                position: { xs:"inherit", sm:"absolute"},
                // pl: {sm:4, xs:5},
                pt:{sm: 4,xs:0}, 
                top: "20vh",
                left: "5vw",
                borderRadius: {sm:"0px 30% 0px 0px ",xs:0},
                



            })}>
                <Typography sx={{
                    mt: 4,
                    fontWeight: 900,
                    color: basic,
                    display:{sm:'block', xs:'none'}

                }} variant="h2">
                    Building dev team, Quickly and Affordably
                </Typography>
                <Typography sx={{
                    // mt: .5,
                    fontWeight: 800,
                    color: basic,
                    display:{sm:'none', xs:'block'}
                    

                }} variant="h4">
                    Building dev team, Quickly and Affordably
                </Typography>
                <Typography sx={{
                    mt: 4,
                    // fontWeight:900,
                    color: basic

                }} variant="body1">
                    We specialize in helping you build a team of expert developers,
                    testers, and leaders. We are setup to deliver long term solutions,
                    or scale to different needs quickly.
                </Typography>
                <Button sx={{
                    mt: 4,
                    width:{xs:"100%", sm:'150px'}
                }} endIcon={
                    <ArrowForwardIosRounded />
                } variant={'contained'} >
                    Get In Touch
                </Button>

            </Box>


        </Grid>
    </section>
}

export default LandingSection