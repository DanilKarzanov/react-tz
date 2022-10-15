import { AccountCircle, ShoppingCart } from "@mui/icons-material"
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom";


const Header = () => {
    return (
        
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        Пицца
                    </Typography>
                    <Link to='account'>
                        <IconButton color="inherit" size="large"><AccountCircle/></IconButton>
                    </Link>
                    <Link to='cart'>
                    <IconButton color="inherit" size="large"><ShoppingCart/></IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        
    )
}

export default Header
