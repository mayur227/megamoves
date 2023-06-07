import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/menu.svg';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';

const Header = (props) => {
    const {showModal, rightbarvisible, showSidebarDrawer, rightbarClose} = props;
    const [scrollsticky, setscrollSticky] = useState('');

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setscrollSticky('');
            } else {
                setscrollSticky('header-sticky');
            }
        });
    }, [])
    
    return(
        <>
            <header className={`header-wrapper ${scrollsticky}`}>
                <div className="header-main">
                    <div className="container">
                        <div className="header-part d-flex justify-content-between align-items-center">
                            <div className="logo-part">
                                <Link to='/'><img src={Logo} className="img-fluid" alt="" /></Link>
                            </div>
                            <div className='header-right d-flex align-items-center'>
                                <a role='button' className='btn-theme btn-theme-color header-btn me-2 me-md-4' onClick={showModal}>Get App Link</a>
                                <div className='menu-icon'>
                                    <a role='button' className='menu-icon-btn' onClick={showSidebarDrawer}>
                                        <img src={menuIcon} className="img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Drawer
                title=""
                placement="right"
                open={rightbarvisible}
                footer=""
                closable={false}
                onClose={rightbarClose}
                className="header-sidebar-drawer"
            >
                <a role={'button'} className='rightbarClose' onClick={rightbarClose}><i className="ri-close-fill"></i></a>
                <div className='header-sidebar-menu'>
                    <ul>
                        <li><Link to={'/'} onClick={rightbarClose}>Home</Link></li>
                        <li><Link to={'/how-to-play'} onClick={rightbarClose}>HOW TO PLAY</Link></li>
                        <li><Link to={'/our-winners'} onClick={rightbarClose}>OUR WINNERS</Link></li>
                        <li><Link to={'/about-us'} onClick={rightbarClose}>ABOUT US</Link></li>
                        <li><Link to={'/jobs'} onClick={rightbarClose}>JOBS</Link></li>
                        <li><Link to={'/community-guidelines'} onClick={rightbarClose}>COMMUNITY GUIDELINES</Link></li>
                        <li><Link to={'/'} onClick={rightbarClose}>INVITE FRIENDS</Link></li>
                        <li><a role='button' onClick={showModal}>DOWNLOAD APP</a></li>
                        
                    </ul>
                </div>
            </Drawer>
        </>
    )
}

export default Header;