import { Input } from 'antd';
import React from 'react';

import security from '../../assets/images/help-center/security.svg';
import gamecontroller from '../../assets/images/help-center/game-controller.svg';
import document from '../../assets/images/help-center/document.svg';
import gift from '../../assets/images/help-center/gift.svg';
import megaphone from '../../assets/images/help-center/megaphone.svg';
import profile from '../../assets/images/help-center/profile.svg';
import questioncircle from '../../assets/images/help-center/question-circle.svg';
import suitcase from '../../assets/images/help-center/suitcase.svg';
import { Link } from 'react-router-dom';

const HelpCenter = (props) => {

    return(
        <>
            <div className='banner-part'>
                <div className='page-title'>
                    <div className='page-title-inner'>
                        <div className="container">
                            <h2><span className='text-primary-color'>HELP</span> CENTER</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="help-center-search pt60">
                    <div className="section-title text-center mb-3">
                        <h2>Hello, how can we help?</h2>
                    </div>
                    <div className="help-center-form">
                        <form>
                            <div className='form-group mb-0 help-center-input'>
                                <i className="ri-search-line"></i>
                                <Input placeholder="Ask a Question…" className='form-control' />
                                <button type="submit" className="btn-theme btn-theme-color">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                <p className='text-gray mb-0 ptb40 text-center'>Or choose a topic to quickly find the help you need</p>
                <div className="help-center-list pb80">
                    <div className='row'>
                        <div className='col-12 col-lg-3 col-md-4 col-sm-6'>
                            <a role='button' className="help-center-block">
                                <span><img src={security} className="img-fluid" alt="" /></span>
                                <p>Account Security</p>
                            </a>
                        </div>
                        <div className='col-12 col-lg-3 col-md-4 col-sm-6'>
                            <Link to={'/how-to-play'} className="help-center-block">
                                <span><img src={gamecontroller} className="img-fluid" alt="" /></span>
                                <p>How to Play</p>
                            </Link>
                        </div>
                        <div className='col-12 col-lg-3 col-md-4 col-sm-6'>
                            <a role='button' className="help-center-block">
                                <span><img src={megaphone} className="img-fluid" alt="" /></span>
                                <p>What’s New</p>
                            </a>
                        </div>
                        <div className='col-12 col-lg-3 col-md-4 col-sm-6'>
                            <a role='button' className="help-center-block">
                                <span><img src={profile} className="img-fluid" alt="" /></span>
                                <p>Profile & Verification</p>
                            </a>
                        </div>

                        <div className='col-12 col-lg-3 col-md-4 col-sm-6'>
                            <a role='button' className="help-center-block">
                                <span><img src={gift} className="img-fluid" alt="" /></span>
                                <p>Offers & Rewards</p>
                            </a>
                        </div>
                        <div className='col-12 col-lg-3 col-md-4 col-sm-6'>
                            <Link to={'/point-calculations'} className="help-center-block">
                                <span><img src={questioncircle} className="img-fluid" alt="" /></span>
                                <p>Points Calculation</p>
                            </Link>
                        </div>
                        <div className='col-12 col-lg-3 col-md-4 col-sm-6'>
                            <Link to={'/point-calculations'} className="help-center-block">
                                <span><img src={document} className="img-fluid" alt="" /></span>
                                <p>Community Guideline</p>
                            </Link>
                        </div>
                        <div className='col-12 col-lg-3 col-md-4 col-sm-6'>
                            <a role='button' className="help-center-block">
                                <span><img src={suitcase} className="img-fluid" alt="" /></span>
                                <p>Applying for a Job</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HelpCenter;