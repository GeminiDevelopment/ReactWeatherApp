import { Component } from "react";
import {
    AppBar,
    Box,
    Button,
    Toolbar,
    Typography
} from "@mui/material"


class NavBar extends Component {
    render() {
        return (
            <Box
                sx={{
                    flexGrow: 1
                }}>
                <AppBar>
                    <Toolbar>
                        <Typography sx={{ flexGrow: 1 }}
                            variant="h6"
                            component="div">
                            Weather App
                        </Typography>

                        <Button color="inherit">
                            Local Weather
                        </Button>
                        <Button color="inherit">
                            National Weather
                        </Button>
                        <Button color="inherit">
                            Map
                        </Button>
                        <Button color="inherit">
                            Contact Us
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

export default NavBar