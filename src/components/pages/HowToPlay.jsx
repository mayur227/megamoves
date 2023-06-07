import React from 'react';
import { Input } from 'antd';

import hplyimg1 from '../../assets/images/app-previewimg-1.png';


const HowToPlay = () => {
    return(
        <>
            <div className='banner-part'>
                <div className='page-title'>
                    <div className='page-title-inner'>
                        <div className="container">
                            <h2><span className='text-primary-color'>How</span> to Play</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-4'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-4 col-xl-4'>
                            <div className="how-ply-left">
                                <div className="how-ply-left-title mb-3 d-flex justify-content-between align-items-center">
                                    <h3 className='mb-lg-0'>Topics</h3>
                                    <div className="how-ply-left-search">
                                        <div className='form-group mb-0 left-input-icon'>
                                            <i className="ri-search-line left-icon"></i>
                                            <Input placeholder="Search any Topic" className='form-control' />
                                        </div>
                                    </div>
                                </div>
                                <div className="how-ply-topic">
                                    <ul>
                                        <li><a role={'button'} className='active'>How to create My Strategy?</a></li>
                                        <li><a role={'button'}>How to participate in Contest?</a></li>
                                        <li><a role={'button'}>Lorem ipsum dolor sit amet, consetetur sadiscing?</a></li>
                                        <li><a role={'button'}>Lorem ipsum dolor sit amet, consetetur?</a></li>
                                        <li><a role={'button'}>Lorem ipsum dolor sit amet, consetetur sadiscing?</a></li>
                                        <li><a role={'button'}>Lorem ipsum dolor sit amet, consetetur?</a></li>
                                        <li><a role={'button'}>Lorem ipsum dolor sit amet, consetetur sadiscing?</a></li>
                                        <li><a role={'button'}>Lorem ipsum dolor sit amet, consetetur?</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-xl-8'>
                            <div className="how-ply-right">
                                <h3 className='mb-4'>How to create My Strategy?</h3>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="how-ply-right-img text-center mb-4">
                                            <img src={hplyimg1} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className="how-ply-right-content mb-4">
                                            <h6>Step-1 :</h6>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                            <ul className='dots-style'>
                                                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                                                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="how-ply-right-img text-center mb-4">
                                            <img src={hplyimg1} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className="how-ply-right-content mb-4">
                                            <h6>Step-2 :</h6>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                            <ul className='dots-style'>
                                                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                                                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowToPlay;