/* eslint-disable */
import { Box, Tabs } from '@mui/material';
import { useState } from 'react';
import BaseTab from '../styled/superhero.tab';

function SuperheroTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <BaseTab label="All" />
                <BaseTab label="Private" />
                <BaseTab label="Public" />
                <BaseTab label="Completed" />
            </Tabs>
        </Box>
    );
}

export default SuperheroTabs;
