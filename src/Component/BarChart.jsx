import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { useMediaQuery } from '@mui/material';
Chart.register(...registerables);

function BarChart() {
    const chartRef = useRef(null);
    const isDesktop = useMediaQuery('(min-width:1000px)');
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    'Jan', 'Feb', 'Mar', 'April', 'May',
                    'June', 'July', 'Aug', 'Sep', 'Oct',
                    'Nov', 'Dec'
                ],
                datasets: [
                    {
                        label: 'Investment',
                        data: [1200, 1500, 1300, 1700, 1600, 1800, 1900, 2000, 2100, 2200, 2300, 2400],
                        backgroundColor: '#4527A0',
                        stack: 'Stack 0',
                    },
                    {
                        label: 'Loss',
                        data: [1200, 300, 250, 400, 350, 300, 450, 200, 600, 550, 700, 800],
                        backgroundColor: '#409AE9',
                        stack: 'Stack 0',
                    },
                    {
                        label: 'Maintenance',
                        data: [800, 450, 120, 180, 160, 1200, 220, 240, 260, 280, 300, 320],
                        backgroundColor: " #B0D6E9",
                        stack: 'Stack 0',
                    },
                    {
                        label: 'Profit',
                        data: [800, 1000, 900, 1200, 1100, 1300, 1400, 1500, 1600, 1700, 1800, 1900],
                        backgroundColor: 'rgba(34, 112, 185, 0.5)',
                        stack: 'Stack 0',
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                    },
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Investment, Loss, Maintenance, and Profit',
                    },
                },
            },
        });

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div style={{
            width: "100%", // Full width on mobile
            maxWidth: "800px",
            height: '400px', // Fixed height
            margin: "30px",
            borderRadius: "10px",
            backgroundColor: "#FFFFFF",
            padding: "10px",
            boxSizing: "border-box" // Ensure padding is included in the width
        }}>
            <canvas ref={chartRef} style={{ height: isDesktop ? false : '100%' }} />
        </div>
    )

}

export default BarChart
