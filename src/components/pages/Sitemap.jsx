import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {

    return (
        <>
            <div className='banner-part'>
                <div className="container">
                    <div className='page-title'>
                        <h2>Sitemap</h2>
                    </div>
                </div>
            </div>
            <div className="page-wrapper sitemap-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <ul className="site-map-links">
                                <li><Link to='/' target="_blank">Home</Link></li>
                                <li><Link to='/how-to-play' target="_blank">How to Play</Link></li>
                                <li><Link to='/our-winners' target="_blank">MegaMoves Winners</Link></li>
                                <li><Link to='/about-us' target="_blank">About Us</Link></li>
                                <li><Link to='/jobs' target="_blank">Jobs</Link></li>
                                <li><Link to='/help-center' target="_blank">help center</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 mb-5">
                            <ul className="site-map-links">
                                <li><Link to='/community-guidelines' target="_blank">Community Guidelines</Link></li>
                                <li><Link to='/community-guidelines-detail' target="_blank">Community Guidelines Detail</Link></li>
                                <li><Link to='/point-calculations' target="_blank">point calculations</Link></li>
                                <li><Link to='/faqs' target="_blank">faqs</Link></li>
                                <li><Link to='/news' target="_blank">News</Link></li>
                                <li><Link to='/privacy-policy' target="_blank">privacy policy</Link></li>
                                <li><Link to='/terms-conditions' target="_blank">terms & conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sitemap;