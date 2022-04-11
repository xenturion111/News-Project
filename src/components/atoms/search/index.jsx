import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './search.css';

const Search = () => {
    return (
        <div>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}>
                <TextField fullWidth label="Search" id="search" />
                </Box>
        </div>
    )
}

export default Search;