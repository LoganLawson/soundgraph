"use client";
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import Graph from '../components/Graph';

export default function NavigationRailExample() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            {/* Navigation Rail */}
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                sx={{
                    width: 72,
                    '.MuiTabs-indicator': {
                        backgroundColor: '#6200ea', // Primary color for Material 3
                        width: 4,
                    },
                }}
            >
                <Tab
                    icon={<HomeIcon />}
                    label="Home"
                    sx={{ justifyContent: 'center', minHeight: 72, textTransform: 'none' }}
                />
                <Tab
                    icon={<ShoppingCartIcon />}
                    label="Cart"
                    sx={{ justifyContent: 'center', minHeight: 72, textTransform: 'none' }}
                />
                <Tab
                    icon={<PersonIcon />}
                    label="Profile"
                    sx={{ justifyContent: 'center', minHeight: 72, textTransform: 'none' }}
                />
            </Tabs>

            {/* Main Content */}
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <h1>Content for Tab {value + 1}</h1>
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Graph Visualization</h1>
                <Graph />
            </Box>
        </Box>
    );
}