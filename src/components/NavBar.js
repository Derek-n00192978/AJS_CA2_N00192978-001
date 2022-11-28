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
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    >
                        Cars
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem component={Link} to='/cars' onClick={handleClose}>All</MenuItem>
                        <MenuItem component={Link} to='/cars/create' onClick={handleClose}>Create</MenuItem>
                    </Menu>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Auto Parts
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem component={Link} to='/auto_parts' onClick={handleClose}>All</MenuItem>
                        <MenuItem component={Link} to='/auto_parts/create' onClick={handleClose}>Create</MenuItem>
                    </Menu>         
        </Grid>       
    )
};
/* exporting the NavBar */
export default NavBar;