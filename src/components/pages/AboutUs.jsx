import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerimg from '../../assets/images/about-us/about-banner-img.svg';
import vision from '../../assets/images/about-us/vision.svg';
import mission from '../../assets/images/about-us/mission.svg';
import teamwork from '../../assets/images/about-us/team-work.svg';
import datadriven from '../../assets/images/about-us/data-driven.svg';
import userexperience from '../../assets/images/about-us/user-experience.svg';
import transparency from '../../assets/images/about-us/transparency.svg';
import journey from '../../assets/images/about-us/journey.svg';
import jointeam from '../../assets/images/about-us/join-team.svg';

import journeyimg from '../../assets/images/avatar.png';
import newsimg from '../../assets/images/easy-3step.png';
import { Tabs } from 'antd';

const AboutUs = () => {

    const teamdata =[
        {name: 'John Doe'},
        {name: 'mike tyson'},
        {name: 'John Doe'},
        {name: 'mike tyson'},
        {name: 'John Doe'},
        {name: 'mike tyson'},
        {name: 'mike tyson'},
        {name: 'John Doe'},
    ]

    const journeydata = [
        {year: '2019'},
        {year: '2020'},
        {year: '2021'},
        {year: '2022'},
        {year: '2023'},
    ];
    const [jtab, setJtab] = useState(1);
    const jtabclick = (index) => {
        setJtab(index);
    }

    return(
        <>
            <div className='full-banner-part'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xl-5">
                            <div className="full-banner-left mb-5 mb-md-0">
                                <h1>ADDING A FEATHER INTO <span className='text-primary-color'>STOCK PREDICTION</span> GAME</h1>
                            </div>
                        </div>    
                        <div className="col-md-6 col-xl-7">
                            <div className="full-banner-img">
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
                            <div className="s-col-img mb-4 mb-lg-0">
                                <img src={vision} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="s-col-content text-center text-lg-start pe-xl-5">
                                <div className="section-title mb-4">
                                    <h2>Our <span className='text-primary-color'>Vision</span> </h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt40 pb120'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="s-col-img mb-4 mb-lg-0">
                                <img src={mission} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="s-col-content text-center text-lg-start ps-xl-5">
                                <div className="section-title mb-4">
                                    <h2>Our <span className='text-primary-color'>Mission</span> </h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ptb80 bg-gray-light-2'>
                <div className="container">
                    <div className="row align-items-center flex-lg-row-reverse">
                        <div className="col-lg-6">
                            <div className="s-col-img mb-5 mb-lg-0">
                                <img src={teamwork} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="s-col-content text-center text-lg-start pe-xl-5">
                                <div className="section-title mb-4">
                                    <h2><span className='text-primary-color'>Team Work</span> is the Secret of our Incredible Product</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="ptb120">
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
                    <div className="section-title text-center text-md-start">
                        <h2><span className='text-primary-color'>Journey </span>so far</h2>
                    </div>
                </div>
                <div className='journey-timeline-view'>
                    <div className="container">
                        <div className='journey-timeline-slider'>
                            <Swiper
                                slidesPerView={4}   
                                className='journey-slider'
                            >
                            {
                                journeydata.map((item, index) => {
                                    let newindex = index+1;
                                    return <SwiperSlide key={index}>
                                        <a role='button' className={`journey-tab ${jtab === newindex ? 'active':''}`} data-index={newindex} onClick={(e) => jtabclick(newindex)}><span>{item.year}</span></a>
                                    </SwiperSlide>
                                })
                            }
                            </Swiper>
                        </div>
                        <div className='tab-content'>
                            {
                                journeydata.map((data, index) => {
                                    return <div id='jtab-pane-1' key={index} className={`tab-pane fade ${jtab === index ? 'show active' : ''}`} >
                                        <div className='journey-tab-part mt-5'>
                                            <Tabs defaultActiveKey="1" tabPosition="left">
                                                <Tabs.TabPane key="1" tab={<h4>Lorem Ipsum Dolor Sit Amet, Consetetur</h4>}>
                                                    <div className='journey-tab-img'>
                                                        <img src={journey} className="img-fluid" alt="" />
                                                    </div>
                                                </Tabs.TabPane>
                                                <Tabs.TabPane key="2" tab={<h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>}>
                                                    <div className='journey-tab-img'>
                                                        <img src={bannerimg} className="img-fluid" alt="" />
                                                    </div>
                                                </Tabs.TabPane>
                                                <Tabs.TabPane key="3" tab={<h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>}>
                                                    <div className='journey-tab-img'>
                                                        <img src={transparency} className="img-fluid" alt="" />
                                                    </div>
                                                </Tabs.TabPane>
                                            </Tabs>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='pt120 pb80'>
                <div className="container">
                    <div className="section-title text-center">
                        <h2><span className='text-primary-color'>Meet</span> Our Team</h2>
                    </div>
                    <div className="row align-items-center">
                        {teamdata.map((data, index)=>{
                            return (
                                <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                                    <div className="team-blck">
                                        <div className="team-frnt">
                                            <div className='team-frnt-img'>
                                                <img src={`https://i.pravatar.cc/400?img=1${index}`} className="img-fluid" alt="" />
                                                <div className="team-content">
                                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                            <h5>{data.name}</h5>
                                            <span>CEO</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='pb80'>
                <div className="container">
                    <div className="section-title text-center">
                        <h2><span className='text-primary-color'>Latest</span> in News</h2>
                    </div>
                    <div className='row'>
                        {
                            [1,2,3].map((data, index) =>{
                                return <div key={index} className='col-12 col-md-4 col-sm-6'>
                            <div className="news-block">
                                <div className="news-block-img">
                                    <a role='button'><img src={newsimg} className="img-fluid" alt="" /></a>
                                </div>
                                <div className='news-block-content'>
                                    <h4><a role='button'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr Dolor Sit Amet</a></h4>
                                    <a role='button' className='arrow-link'>View More <i className="ri-arrow-right-line"></i></a>
                                </div>
                            </div>
                        </div>
                            })
                        }
                    </div>
                    <div className='text-center mt-4'>
                        <Link to={'/news'} className='btn-theme btn-primary-border'>VIEW ALL</Link>
                    </div>
                </div>
            </div>

            <div className='ptb120 bg-gray-light-2'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="s-col-img mb-4 mb-lg-0">
                                <img src={jointeam} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="s-col-content text-center text-lg-start ps-xl-5">
                                <div className="section-title mb-4">
                                    <h2>Join Our Team </h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                <div className='mt-4'>
                                    <Link to={'/jobs'} className='btn-theme btn-theme-color min-w150'>EXPLORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;