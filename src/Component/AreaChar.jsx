import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Button, useMediaQuery } from '@mui/material';

const data = [
    { name: 'Bajaj Finery', profit: 3000, pv: 1400, amt: 2400 },
    { name: 'TTML', profit: 3000, pv: 1398, amt: 2210 },
    { name: 'Reliance', profit: 2000, pv: 4800, amt: 2290 },
    { name: 'TTML', profit: 2780, pv: 3908, amt: 2000 },
    { name: 'Stolon', profit: 4890, pv: 4800, amt: 1181 },
    { name: 'Page F', profit: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', profit: 3490, pv: 2300, amt: 2100 },
];

const AreaChar = () => {
    const [showTable, setShowTable] = useState(true);
    const isDesktop = useMediaQuery('(min-width:1200px)');
    const handleToggleTable = () => {
        setShowTable((prev) => !prev);
    };
    return (
        <Paper elevation={3} style={{ padding: '16px', height: '440px', width: isDesktop ? "200px" : '100%', display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom>
                Popular Stocks
            </Typography>
            <div style={{ padding: '16px', height: '30%', borderRadius: "5px", backgroundColor: "#EDE7F6" }}> {/* Adjust height to occupy half of the Paper */}
                <ResponsiveContainer>
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis hide={true} /> {/* Hide X-axis labels */}
                        <YAxis hide={true} />
                        <Tooltip />
                        <Area type="monotone" dataKey="profit" stroke="#8884d8" fillOpacity={0.6} fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div>
                <Button onClick={handleToggleTable} style={{ marginTop: '16px' }}>
                    {showTable ? 'View Less' : 'View More'}
                </Button>
                <TableContainer style={{ maxHeight: showTable ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                    <Table>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.amt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Paper>
    );
};

export default AreaChar;