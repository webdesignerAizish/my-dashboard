import React from 'react'
import ButtonDrawer from './ButtonDrawer'
import SpeedIcon from '@mui/icons-material/Speed';
import KeyIcon from '@mui/icons-material/Key';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import WebIcon from '@mui/icons-material/Web';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function DrawerContent() {
    return (
        <div style={{ padding: "10px" }}>
            <div>
                <h4>Dashboard</h4>
                <ButtonDrawer content="Dashboard" icon={<SpeedIcon />} />
                <hr></hr>
            </div>
            <div>
                <h4>Pages</h4>
                <h6>Pages Caption</h6>
                <ButtonDrawer content="authentication" icon={<KeyIcon />} />
                <hr></hr>
            </div>
            <div>
                <h4>Utilities</h4>

                <ButtonDrawer content="typography" icon={<FormatColorTextIcon />} url="https://mui.com/material-ui/react-typography/" />
                <ButtonDrawer content="color" icon={<ColorLensIcon />} url="https://mui.com/material-ui/customization/color/" />
                <ButtonDrawer content="shadow" icon={<InvertColorsIcon />} url="https://mui.com/system/shadows/" />
                <hr></hr>
            </div>
            <div>
                <ButtonDrawer content="sample page" icon={<WebIcon />} />
                <ButtonDrawer content="documentation" icon={<HelpOutlineIcon />} url="https://mui.com/" />
                <hr></hr>
            </div>
        </div>
    )
}

export default DrawerContent
