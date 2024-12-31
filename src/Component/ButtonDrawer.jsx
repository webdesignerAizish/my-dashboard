import React from 'react'
import { Button } from '@mui/material'
function ButtonDrawer({ content, icon, url }) {
    return (
        <div>
            <Button
                component="a" // Render as an anchor tag
                href={url}
                sx={{
                    color: '#697586', // Text color
                    borderColor: 'purple',
                    textTransform: "capitalize",
                    fontSize: '15px',
                    borderRadius: "16px",
                    width: "100%",
                    display: 'flex', // Use flexbox
                    justifyContent: 'flex-start',
                    margin: "8px 0",
                    padding: '16px', // Set padding here
                    '&:hover': {
                        backgroundColor: '#EDE7F6', // Background color on hover
                        color: '#5E46C0', // Text color on hover
                    },
                }}
                startIcon={icon}
            >{content}</Button>
        </div>
    )
}

export default ButtonDrawer
