import {IconButton, TextField, useTheme, Box, MenuItem, Typography} from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import Menu from '@mui/material/Menu';
import "./header.scss";
import React, { useState } from "react";



const useAuth = () => {
  return true;
};

const Dropdown = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();
    // @ts-ignore
    //const { authKey } = useAuth();
    const authKey = false; // true = logged in, false = not logged
    return (
          <li>
                <IconButton
                    aria-label="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    sx={{ color: `${theme.palette.text.primary}` }}
                    onClick={handleClick}
                >
                  <TuneIcon />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    className="dropdown-list"
                    sx={{
                        right: `${!authKey && '20px'}`
                    }}
                >

                    {authKey && (
                      <>
                          <MenuItem
                              onClick={() => {
                                  handleClose()
                              }}
                          >
                            Logout
                          </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleClose()
                            }}
                        >
                            Settings
                        </MenuItem>                       
                      </>
                    )}
                          {!authKey && (
                              <>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose()
                                        }}
                                    >
                                      Register
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            handleClose()
                                        }}
                                    >
                                      Login
                                    </MenuItem>
                              </>
                          )}

                </Menu>
          </li> 
      )
}

const Header = () => {
  const theme = useTheme();
  // @ts-ignore
  const { authKey } = useAuth();

  return (
    <header>
      <Box className="header-container">
        <ul className="header-list">
          <Typography style={{ color: '#ccc'}}>LOGO GOES HERE</Typography>
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </ul>
        <ul className="header-list">
          <Dropdown />
        </ul>
      </Box>
    </header>
  );
};

export default Header;
