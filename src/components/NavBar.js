import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const NavBar = (props) => {
    const navigate = useNavigate()
    const logout = ()=> {
        props.onAuthenticated(false);
        navigate('/')
    }
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const open = Boolean(anchorEl);
    const open1 = Boolean(anchorEl1);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    return (        
        <Grid item xs={12}>
            <Button component={Link} to='/'>Home</Button>
          
            {/* Login and Register Button with logout if authenticated*/}
                    <button> <Link to='./Login'>Login</Link></button> |
                    <button> <Link to='/Register'>Register</Link></button> |
                    {(props.authenticated) ? (
                        <Button variant="outlined" onClick={logout}>Logout</Button>
                    ) : ""} 

                    <Button
                    id="button1"
                    aria-controls={open ? 'menu2' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    >
                        Cars
                    </Button>
                    <Menu
                        id="menu1"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'button1',
                        }}
                    >
                        <MenuItem component={Link} to='/cars/' onClick={handleClose}>All</MenuItem>
                        <MenuItem component={Link} to='/cars/create' onClick={handleClose}>Create</MenuItem>
                    </Menu>
                    <Button
                        id="button2"
                        aria-controls={open ? 'menu2' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick1}
                    >
                        Auto Parts
                    </Button>
                    <Menu
                        id="menu2"
                        anchorEl={anchorEl1}
                        open={open1}
                        onClose={handleClose1}
                        MenuListProps={{
                        'aria-labelledby': 'button2',
                        }}
                    >
                        <MenuItem component={Link} to='/auto_parts/' onClick={handleClose1}>All</MenuItem>
                        <MenuItem component={Link} to='/auto_parts/create' onClick={handleClose1}>Create</MenuItem>
                    </Menu>         
        </Grid>       
    )
};
/* exporting the NavBar */
export default NavBar;