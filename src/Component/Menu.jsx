import React from 'react'
import BarChart from './BarChart';
import Card from './Card';
import TinyLineChart from './TinyLineChart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AreaChart from './AreaChar';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    useMediaQuery,
    Box

} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerContent from './DrawerContent';
function Menu() {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery('(min-width:1200px)');
    const toggleDrawer = () => {
        setOpen((prev) => !prev); // Changed to use functional update for toggling
    };
    const handleCloseDrawer = () => {
        setOpen(false);
    };
    return (
        <div>
            <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 'none', color: "#673AB7" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                    <Typography variant="h6">Fatima</Typography>
                    <IconButton edge="start" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant={isDesktop ? "persistent" : "temporary"}
                open={isDesktop ? true : open}
                onClose={handleCloseDrawer}
                sx={{
                    '& .MuiDrawer-paper': {
                        zIndex: 1, // Ensure the drawer has a lower zIndex than the AppBar
                        paddingTop: "50px",
                        width: isDesktop ? '16%' : "70%",
                    },
                }}>
                <DrawerContent></DrawerContent>
            </Drawer>
            <div
                style={{
                    marginTop: '64px', // Adjust this value based on the height of your AppBar
                    marginLeft: isDesktop ? '16%' : 0, // Adjust for the width of the Drawer if open
                    padding: '16px', // Optional padding for the content
                }}
            >
                {/* Your main content goes here */}
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <Card
                        color="#522EA8"
                        heading="$500.00"
                        paragraph="Total Earning"
                        icon={<BusinessCenterIcon />}
                        pcolor="white"
                        width="340px"
                        bcolor="#4527A0"
                    ></Card>
                    <Card
                        color="#1A77D2"
                        heading="$961"
                        paragraph="Total Order"
                        icon={<AutoAwesomeMotionIcon />}
                        customComponent={<TinyLineChart></TinyLineChart>}
                        width="340px"
                        pcolor="white"
                        bcolor="#1565C0"
                    ></Card>

                    <Box width={isDesktop ? '280px' : "100%"}>
                        <Card
                            color="#90B9B5"

                            paragraph="$203k Total Earning"
                            icon={<BusinessCenterIcon />}
                            height="80px"

                            bcolor="#8C7AC4"
                        ></Card>
                        <Card
                            color="#5e63b6"
                            pcolor="black"
                            paragraph="$203k Total Order"
                            icon={<AutoAwesomeMotionIcon />}
                            height="80px"

                            bcolor="#a393eb"
                        ></Card>
                    </Box>
                </div>
                <div
                    style={{ display: "flex", flexWrap: "wrap" }}
                >
                    <BarChart />
                    <AreaChart></AreaChart>
                </div>
            </div>

        </div >)
}

export default Menu
