import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/footer-logo.svg';
const Footer = (props) => {
    const {showModal} = props;
    return (
        <>
            <div className="footer-wrapper pt40">
                <div className="container">
                    <div className='footer-btn d-flex justify-content-between align-items-center mb-4'>
                        <a role='button' onClick={showModal} className='btn-theme btn-primary-border'>Invite Friends</a>
                        <a role='button' onClick={showModal} className='btn-theme btn-primary-border'>Download App</a>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-6 col-md-5'>
                            <div className='footer-link'>
                                <ul className='d-sm-flex flex-sm-wrap align-items-sm-center text-sm-center'>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about-us'>About Us</Link></li>
                                    <li><Link to='/community-guidelines'>Community Guidelines</Link></li>
                                    <li><Link to='/disclaimer'>Disclaimer</Link></li>
                                    <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                                    <li><Link to='/terms-conditions'>Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-6 col-md-5 order-md-3'>
                            <div className='footer-link'>
                            <ul className='d-sm-flex flex-sm-wrap align-items-sm-center text-sm-center'>
                                    <li><Link to='/how-to-play'>How to Play</Link></li>
                                    <li><Link to='/point-calculations'>point calculations</Link></li>
                                    <li><Link to='/help-center'>help center</Link></li>
                                    <li><Link to='/our-winners'>MegaMoves Winners</Link></li>
                                    <li><a role='button'>Offers & Rewards</a></li>
                                    <li><Link to='/jobs'>Jobs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className='footer-logo text-center'>
                                <Link to='/' className='d-block'>
                                    <img src={Logo} className="img-fluid" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='social-icons mt-4 mb-4'>
                        <ul className='d-flex justify-content-center align-items-center'>
                            <li><Link to={'https://facebook.com/'} target='_blank'><i className="ri-facebook-fill"></i></Link></li>
                            <li><Link to={'https://instagram.com/'} target='_blank'><i className="ri-instagram-line"></i></Link></li>
                            <li><Link to={'https://linkedin.com/'} target='_blank'><i className="ri-linkedin-fill"></i></Link></li>
                            <li><Link to={'https://youtube.com/'} target='_blank'><i className="ri-youtube-fill"></i></Link></li>
                            <li><Link to={'https://twitter.com/'} target='_blank'><i className="ri-twitter-fill"></i></Link></li>
                        </ul>
                    </div>
                    <div className='footer-contact'>
                        <ul className='d-md-flex justify-content-between'>
                            <li>
                                <span><i className="ri-phone-fill"></i></span>
                                <p>
                                    <Link to={'https://wa.me/+919998899988'} target='_blank'>+91 99988 99988</Link> 
                                    <span>|</span> 
                                    <Link to={'https://wa.me/+919999988888'} target='_blank'>+91 99999 88888</Link>
                                </p>
                            </li>
                            <li>
                                <span><i className="ri-map-pin-line"></i></span>
                                <p>1374, ABC Central, Street Name, XYZ Road, State, India - XXXXXX</p>
                            </li>
                            <li>
                                <span><i className="ri-mail-fill"></i></span>
                                <p><Link to="#" onClick={(e) => { window.location = 'mailto:info@megamoves.com'; e.preventDefault(); }} >info@megamoves.com</Link></p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <p>2023 All rights reserved @megamoves.com</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer;