import { basic } from "@/utils/theme"
import { Box, Grid, Typography } from "@mui/material"
import Image from "next/image"

const ProcessSection = () => {
    return <section>
        <Box sx={{
            height: { sm: "60vh" },
            backgroundImage: "linear-gradient(to right, #FF9900, #F2CB00)"
            ,
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center'
        }}>
            <Typography sx={{
                mt: 9,
                fontWeight: 600,
                color: "white",
                backgroundSize: "contain",
                textAlign: 'center'
                // display: { sm: 'block', xs: 'none' }

            }} variant="h5">
                How to start
            </Typography>
            <Typography sx={{
                mt: 3,
                fontWeight: 600,
                color: { sm: basic, xs: 'white' },
                backgroundSize: "contain",

                textAlign: 'center'
                // display: { sm: 'block', xs: 'none' }

            }} variant="h4">
                Easy Process
            </Typography>
            <Typography sx={{
                mt: 2,
                // fontWeight: 500,
                width: { sm: '30%', xs: '70%' },
                color: basic,
                backgroundSize: "contain",

                textAlign: 'center'
                // display: { sm: 'block', xs: 'none' }

            }} variant="body2">
                We specialize in helping you build a team of expert developers,
                testers, and leaders.
            </Typography>

            <Grid container sx={{

                width: { sm: '90vw', xs: "98vw" },

                ml: { sm: 0, xs: .5 },
            }} >
                <Grid item xs={12} my={4}  display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sm={3} md={3} >
                    <Image alt="Inquire" src={"/11.svg"} height={100} width={100} />
                    <Typography sx={{
                        mt: 2,
                        fontWeight: 600,
                        color: { sm: basic, xs: basic },
                        backgroundSize: "contain",

                        textAlign: 'center'
                        // display: { sm: 'block', xs: 'none' }

                    }} variant="h4">
                     01  <span style={{
                        fontSize:23,marginLeft:10

                     }}>YOU ASK</span> 
                    </Typography>
                </Grid>
                <Grid item xs={12} my={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sm={3} md={3} >
                    <Image alt="Inquire" src={"/12.svg"} height={100} width={100} />
                    <Typography sx={{
                        mt: 2,
                        fontWeight: 600,
                        color: { sm: basic, xs: basic },
                        backgroundSize: "contain",

                        textAlign: 'center'
                        // display: { sm: 'block', xs: 'none' }

                    }} variant="h4">
                     02  <span style={{
                        fontSize:23,marginLeft:10
                        
                     }}>WE PROCEED</span> 
                    </Typography>
                </Grid>
                <Grid item xs={12} my={4}  display={'flex'}  flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sm={3} md={3} >
                    <Image alt="Inquire" src={"/13.svg"} height={100} width={100} />
                    <Typography sx={{
                        mt: 2,
                        fontWeight: 600,
                        color: { sm: basic, xs: basic },
                        backgroundSize: "contain",

                        textAlign: 'center'
                        // display: { sm: 'block', xs: 'none' }

                    }} variant="h4">
                     03  <span style={{
                        fontSize:23,marginLeft:10
                        
                     }}>Negotiate</span> 
                    </Typography>
                </Grid>
                <Grid item xs={12} my={4}  display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sm={3} md={3} >
                    <Image alt="Inquire" src={"/14.svg"} height={100} width={100} />
                    <Typography sx={{
                        mt: 2,
                        fontWeight: 600,
                        color: { sm: basic, xs: basic },
                        backgroundSize: "contain",

                        textAlign: 'center'
                        // display: { sm: 'block', xs: 'none' }

                    }} variant="h4">
                     03  <span style={{
                        fontSize:23,marginLeft:10
                        
                     }}>YOU GET</span> 
                    </Typography>
                </Grid>

            </Grid>

        </Box>

    </section>
}
export default ProcessSection