import React from 'react';

import bannerimg from '../../assets/images/jobs/jobs-banner-img.svg';
import ourteam from '../../assets/images/jobs/our-team.svg';
import datadriven from '../../assets/images/about-us/data-driven.svg';
import userexperience from '../../assets/images/about-us/user-experience.svg';
import transparency from '../../assets/images/about-us/transparency.svg';

const Jobs = () => {

    const careerdata =[
        {title: 'Senior Data Engineer'},
        {title: 'Lead Android Developer'},
        {title: 'Senior Data Engineer'},
        {title: 'Lead Android Developer'},
        {title: 'Senior Data Engineer'},
        {title: 'Lead Android Developer'},
        {title: 'Lead Android Developer'},
        {title: 'Senior Data Engineer'},
        {title: 'Nothing For You?'},
    ]

    return(
        <>
            <div className='full-banner-part'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-5">
                            <div className="full-banner-left mb-5 mb-md-0">
                                <h1>INTERESTED IN NEW AGE TECH? <span className='text-primary-color'>JOIN US</span></h1>
                            </div>
                        </div>    
                        <div className="col-md-6 col-xl-7">
                            <div className="full-banner-img jobs-banner-img">
                                <img src={bannerimg} className="img-fluid" alt="" />
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className='ptb120'>
                <div className="container">
                    <div className="row align-items-center flex-lg-row-reverse">
                        <div className="col-lg-6">
                            <div className="s-col-img mb-4 mb-lg-0 text-center">
                                <img src={ourteam} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="s-col-content text-center text-lg-start pe-xl-5">
                                <div className="section-title mb-4">
                                    <h2><span className='text-primary-color'>Be part</span> of our Team</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            </div>
                        </div>    
                        
                    </div>
                </div>
            </div>
            <div className="pb80">
                <div className="container">
                    <div className="section-title text-center">
                        <h2><span className='text-primary-color'>What</span> makes us best</h2>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='jobs-make-block'>
                                <img src={datadriven} className="img-fluid" alt="" />
                                <h5>Data Driven</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='jobs-make-block'>
                                <img src={userexperience} className="img-fluid" alt="" />
                                <h5>Best User Experience</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='jobs-make-block'>
                                <img src={transparency} className="img-fluid" alt="" />
                                <h5>Transparency</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ptb120 bg-gray-light-2'>
                <div className="container">
                    <div className="section-title text-center">
                        <h2><span className='text-primary-color'>Benefits</span> of being with us</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span>1</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span>2</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span>3</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span>4</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span>5</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span>6</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt120 pb80'>
                <div className='op-layout'>
                    <div className="container">
                        <div className="section-title text-center">
                            <h2><span className='text-primary-color'>Open</span> Positions</h2>
                        </div>
                        <div className="row align-items-center">
                            {
                                careerdata.map((data, index)=>{
                                    return (
                                        <div key={index} className="col-md-6 col-lg-4">
                                            <div className="op-blck">
                                                <h5><a role='button'>{data.title}</a></h5>
                                                <a role='button' className='arrow-link'>Apply <i className="ri-arrow-right-line"></i></a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs;