import React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
    LinePlot,
    MarkPlot,
    lineElementClasses,
} from '@mui/x-charts/LineChart';

function TinyLineChart() {
    const pData = [240, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];

    return (
        <div >
            <ChartContainer
                width={300}
                height={200}
                series={[{ type: 'line', data: pData }]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    [`& .${lineElementClasses.root}`]: {
                        stroke: 'white', // Set the line color to white
                    },
                }}
                disableAxisListener
            >
                <LinePlot stroke="white" strokeWidth={2} />
                <MarkPlot />
            </ChartContainer>

        </div>
    );
}

export default TinyLineChart;