import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import Link from 'next/link';
import { basic, brand } from '@/utils/theme';
import { ArrowForward, ArrowForwardRounded, ArrowRight, KeyboardArrowRight } from '@mui/icons-material';

const pages = [{
    page: 'How to Start',
    to: "/"

}, {
    page: 'Services',
    to: "services"
}, {
    page: 'Technologies',
    to: '/tech'
}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function CompanyAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar elevation={0} sx={{
            background: "#fff",
            borderBottom: "solid #E1E1E1 1px"
        }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: .5, display: { xs: 'none', md: 'flex' } }}>


                        <Image style={{marginTop:'5px', marginBottom:'5px'}} src={'/logo_main.svg'} width={300}
                            height={60}
                            alt='logo'
                        />
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu} 
                        >
                            <MenuIcon sx={{
                                color:basic
                            }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }} 
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                color:basic,
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                       
                     <Image src={'/logo_main.svg'} width={300}
                            height={50}
                            alt='logo'
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link
                                key={page.page}
                                href={page.to}
                                style={{ textDecoration: 'none', margin: '10px', fontFamily: "poppins", color: '#16205F', display: 'block' }}
                            >
                                {page.page}
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Tooltip title="More">
                            <Button endIcon={<ArrowForwardRounded />} variant='outlined'  onClick={handleOpenUserMenu} sx={{ p: 1, color:basic, border:`solid ${basic} 1px`, background:`${basic}05`}}>
                             Build A Team
                             
                             </Button>
                            
                        </Tooltip>
                        <Link 
                                 style={{ textDecoration: 'none',margin: '10px', fontFamily: "poppins", color: '#16205F' }}
                          
                            href={"/contact"}>
                                Contact Us
                            </Link>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default CompanyAppBar;