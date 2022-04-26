import React, { useState, useEffect, useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Buttons from '../button/index'
import Nav from './Nav/index';
import './navBar.css'
import { NewsContext }   from "../../config/NewsContext";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  // const NavComp = styled('div')(() => ({
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // }));



const Navbar = () => {
  // const [searchInput, setSearchInput] = useState('');
  // const { data } = useContext(NewsContext);

  // const SearchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //     data.filter((item) => {
  //       return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
  //     })
  // }
    return (
        <section className="navbar">
            <Box sx={{ flexGrow: 1}} >
                <AppBar position="static" style={{ flexGrow: 1, background: 'transparent', boxShadow: 'none'}}>
                    <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
                    >
                        <Nav />
                    </Typography>
                    
                    
                    <Search>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => SearchItems(e.target.value)}
                        />
                    </Search>
                      <Buttons id="btn-search" text='Cari'/>
                    </Toolbar>
                </AppBar>
            </Box>
        </section>
    )
}

export default Navbar;