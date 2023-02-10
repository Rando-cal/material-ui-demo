// from https://www.youtube.com/watch?v=Xoz31I1FuiY

import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent,
        CardMedia, CssBaseline, Grid, Toolbar, Container
     } from '@mui/material';  // this is a named import. NOT a default

import {PhotoCamera} from '@mui/material/' //folder is diff from tutorial

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>

            </AppBar>
        
        </>
    );

}


export default App;