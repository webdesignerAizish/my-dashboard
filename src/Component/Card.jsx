import React from 'react'
import { Box, Typography, IconButton, Grid } from '@mui/material';

function Card({ color, heading, paragraph, icon, width, bcolor, customComponent }) {
    return (

        <Box
            sx={{
                backgroundColor: color,
                padding: 2,
                borderRadius: 2,
                maxWidth: width,

                textAlign: 'center',
            }}
        >
            <Grid container alignItems="center">
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <IconButton
                        sx={{
                            backgroundColor: bcolor,
                            color: "#D1CAE8",

                        }}
                    >
                        {icon}
                    </IconButton>
                    <Typography variant="h4" component="h1" sx={{ color: '#fff', marginBottom: 0 }}>
                        {heading}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff', marginBottom: 3 }}>
                        {paragraph}
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: width, padding: "0 30px" }}>
                    {customComponent}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Card
