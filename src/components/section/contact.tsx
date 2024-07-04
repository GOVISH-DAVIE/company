"use client"
import { basic } from "@/utils/theme"
import { ArrowForwardIos, ArrowForwardIosRounded, ArrowRight } from "@mui/icons-material"
import { Grid, Container, Box, Typography, Button, TextField } from "@mui/material"

const ContactUsSection = () => {
    return <section>

        <Grid container mt={3} spacing={2} sx={{
            height: { sm: '90vh', xs: "110vh" },
            width: { sm: '90vw', xs: "98vw" },
            mt: { sm: '300px', xs: 0 },
            ml: { sm: "5vw", xs: .5 }
        }}>
            <Grid item md={9} xs={12} sx={(theme) => ({
                backgroundRepeat: "no-repeat",
                height: { xs: '40vh', sm: 'inherit' },
                backgroundSize: { xs: 'contain', sm: 'contain' },
                backgroundImage: "url(/cont.png)",
            })} >

            </Grid>

            <Box sx={(theme) => ({
                width: { xs: "80vw", sm: "45vw" },
                // height: "55vh",
                background: { sm: 'white', sx: "#ffffff40" },
                position: { xs: "relative", sm: "relative" },
                pl: { sm: 4, xs: 5 },
                pb: { sm: 4, xs: 5 },
                pt: { sm: 4, xs: 0 },
                // zIndex:1,
                top: { sm: "-60vh", sx: "-30vh" },
                right: { sm: "-30vw", sx: '-5vw' },
                borderRadius: { sm: "30% 0% 0px 0px ", xs: 0 },




            })}>
                <Typography sx={{
                    mt: 4,
                    fontWeight: 900,
                    color: basic,
                    display: { sm: 'block', xs: 'none' }

                }} variant="h4">
                    Connect With Your Next Great Hire Today!
                </Typography>
                <Typography sx={{
                    // mt: .5,
                    fontWeight: 800,
                    color: basic,
                    display: { sm: 'none', xs: 'block' }


                }} variant="h4">
                    Connect With Your Next Great Hire Today!
                </Typography>

                <Grid py={4} container>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField id="outlined-basic" label="Company Name" variant="outlined" />

                    </Grid>
                    <Grid item  xs={12} sm={6} md={6}>
                        <TextField id="outlined-basic" label="Your Name" variant="outlined" />

                    </Grid>
                    <Grid py={4} container>
                    <Grid item  xs={12} sm={6} md={6}>
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />

                    </Grid>
                    <Grid item  xs={12} sm={6} md={6}>
                        <TextField id="outlined-basic" label="Email " variant="outlined" />

                    </Grid>
                    </Grid>


                </Grid>

                <Button sx={{
                    mt: 4,
                    width: { xs: "100%", sm: '200px' }
                }} endIcon={
                    <ArrowForwardIosRounded />
                } variant={'contained'} >
                    GET CONSULTATION
                </Button>

            </Box>


        </Grid>
    </section>
}

export default ContactUsSection