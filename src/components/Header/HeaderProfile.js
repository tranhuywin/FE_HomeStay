import "./Header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Search } from "../index";
import Download from "../../assets/download.js";
import Home from "../../assets/home.js";
import Styles from "../headers/headerBrand.module.scss";
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Sortdown from '../../assets/images/banner/SortDown.png';

function HeaderProfile(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div class="header__line">
                <div className="dflex">
                    <div className="left"></div>
                    <div className="right" style={{ flexBasis: "60%" }}>
                        <div className="dflex1">
                            <div style={{ marginLeft: "1rem", flexBasis: "10%", cursor: "pointer" }}>
                                <div style={{ display: "flex" }}>
                                    <Download />
                                    <p className="text-style">Tải App</p>
                                </div>
                            </div>
                            <div style={{ marginRight: "1rem", flexBasis: "25%", cursor: "pointer" }}>
                                <div style={{ display: "flex" }}>
                                    <Home />
                                    <Link to="/post" className="text-style">Đăng phòng dễ dàng</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container" style={{ padding: 0, margin: 0 }}>
                    <div className="logo_search">
                        <div className="logo">
                            <Link className={Styles.HeaderBrand} to="/home" >
                                FranceStay
                            </Link>
                        </div>
                        <Search />
                        <div className="popup">
                            <div className="upload_room">
                                <Link to="/home/blog" style={{ fontWeight: 700, lineHeight: "20px"}}>Blog</Link>
                            </div>
                            <div className="upload_room">
                                <Link to="/booking-room" style={{ fontWeight: 700, lineHeight: "20px" }}>Đặt phòng</Link>
                            </div>
                            <div className={Styles.HeaderLeftProfile}>
                                <button onClick={handleClick} style={{ fontWeight: 700, marginRight: "0.8rem" }}>Long Pháp</button>
                                <img src={Sortdown}></img>
                            </div>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem sx={{fontSize: "16px"}}>
                                    <ListItemIcon>
                                        <CalendarTodayIcon fontSize="large" />
                                    </ListItemIcon>
                                    <Link to='/me' className={Styles.HeaderLeftProfileMenu}>Đặt chỗ của tôi</Link>
                                </MenuItem>
                                <Divider></Divider>
                                <MenuItem sx={{fontSize: "16px"}}>
                                    <ListItemIcon>
                                        <Settings fontSize="large" />
                                    </ListItemIcon>
                                    <Link to='/me'  className={Styles.HeaderLeftProfileMenu}>Cài đặt tài khoản</Link>
                                </MenuItem>
                                <Divider></Divider>
                                <MenuItem sx={{fontSize: "16px"}}>
                                    <ListItemIcon>
                                        <Logout fontSize="large" />
                                    </ListItemIcon>
                                    Đăng xuất
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderProfile;
