import React, { useRef } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Input, Collapse, Space } from 'antd';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import bannerSlider1 from '../../assets/images/home/banner-slider-img-1.png';
import bannerSlider2 from '../../assets/images/home/banner-slider-img-2.png';
import bannerSlider3 from '../../assets/images/home/banner-slider-img-3.png';
import bannerSlider4 from '../../assets/images/home/banner-slider-img-4.png';
import easy3step from '../../assets/images/easy-3step.png';
import easyeveryone1 from '../../assets/images/easy-everyone-1.svg';
import easyeveryone2 from '../../assets/images/easy-everyone-2.svg';
import easyeveryone3 from '../../assets/images/easy-everyone-3.svg';

import apppreviewimg2 from '../../assets/images/app-previewimg-2.png';
import apppreviewimg3 from '../../assets/images/app-previewimg-3.png';
import apppreviewimg4 from '../../assets/images/app-previewimg-4.png';
import apppreviewimg5 from '../../assets/images/app-previewimg-5.png';

import winnersimg from '../../assets/images/avatar.png';
import appdownloadimg from '../../assets/images/app-download-img.png';
import googlepay from '../../assets/images/googlepay.svg';
import appstore from '../../assets/images/appstore.svg';
import qrcode from '../../assets/images/metro-qrcode.svg';

const Home = () => {
    const winnersslider = [1,2,3,4,5]
    const apppreviewslider = [
        {img:`${apppreviewimg4}`},
        {img:`${apppreviewimg2}`},
        {img:`${apppreviewimg3}`},
        {img:`${apppreviewimg4}`},
        {img:`${apppreviewimg5}`},
        {img:`${apppreviewimg3}`},
    ]
    const winners_slider = useRef();
    const ap_slider = useRef();
    
    const winnerssliderOption = {
        className: "center",
        //centerMode: true,
        infinite: true,
        arrows: false,
        //centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    const apppreviewsliderOption = {
        className: "center",
        centerMode: true,
        infinite: true,
        arrows: false,
        //centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    };

    const { Panel } = Collapse;

    const text = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet`;

    return(
        <>
            <div className="home-banner-part">
                <div className="home-slider-part">
                    <Swiper 
                        modules={[Autoplay]}
                        slidesPerView={1}
                        // autoplay={{
                        //     delay: 3000,
                        //     disableOnInteraction: false
                        // }}
                    >
                        <SwiperSlide>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="home-banner-title">
                                            <h1>MAKE YOUR MOVES<i>S</i><i>S</i><i>S</i><i>S</i> AND <span className='text-primary-color'>WIN MEGA PRIZES</span></h1>
                                        </div>
                                    </div>    
                                    <div className="col-lg-6">
                                        <div className="home-banner-img home-banner-img-1">
                                            <img src={bannerSlider1} className="img-fluid" alt="" />
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="home-banner-title">
                                            <h1>PREDICTION OF <span className='text-primary-color'>DIRECTIONS</span> ONLY</h1>
                                            <p>NO MORE KNOWLEDGE REQUIRES</p>
                                        </div>
                                    </div>    
                                    <div className="col-lg-6">
                                        <div className="home-banner-img">
                                            <img src={bannerSlider2} className="img-fluid" alt="" />
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="home-banner-title">
                                            <h1>PREDICTION OF <span className='text-primary-color'>PRICES</span> ONLY</h1>
                                            <p>NO MORE KNOWLEDGE REQUIRES</p>
                                        </div>
                                    </div>    
                                    <div className="col-lg-6">
                                        <div className="home-banner-img">
                                            <img src={bannerSlider3} className="img-fluid" alt="" />
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="home-banner-title">
                                            <h1 className='mb-0'>RISK SMALL</h1>
                                            <p>( LIKE A CUP OF COFFEE )</p>
                                            <h1>AND <span className='text-primary-color'>WIN MEGA PRIZES</span></h1>
                                        </div>
                                    </div>    
                                    <div className="col-lg-6">
                                        <div className="home-banner-img">
                                            <img src={bannerSlider4} className="img-fluid" alt="" />
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='dnl-official-app'>
                    <div className='dnl-app-inner d-lg-flex align-items-center'>
                        <h3>Download Our Official App</h3>
                        <div className='dnl-app-from flex-1'>
                            <form className="d-md-flex justify-content-center justify-content-lg-start">
                                <div className='form-group d-flex align-items-center mb-3 mb-md-0'>
                                    <div className='country-code'>
                                        <span>+91</span>
                                    </div>
                                    <Input placeholder="Enter Mobile Number" className='form-control' />
                                </div>
                                <button type="submit" className="btn-theme btn-theme-color">Get App Link</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ptb100">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Meet Our Latest Winners</h2>
                    </div>
                    <div className='winners-slider-view'>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false
                            }}
                            className='swiper-arrow-center'
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {
                                winnersslider.map((data, index) => {
                                    return(
                                        <SwiperSlide key={index}>
                                        <div className='winners-block'>
                                                <div className='winners-img'>
                                                    <img src={winnersimg} className="img-fluid" alt="" />
                                                </div>
                                                <h6>User Name</h6>
                                                <div className='winners-price'>
                                                    ₹ 10,00,000
                                                </div>
                                                <p>Mega Contest Winner | 15 April</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className='text-center'>
                        <Link to={'/our-winners'} className='btn-theme btn-primary-border'>View All</Link>
                    </div>
                </div>
            </div>
            <div className="easy3step ptb60">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>3 easy steps to play on MegaMoves</h2>
                    </div>
                    <div className='row align-items-center flex-lg-row-reverse'>
                        <div className='col-lg-6'>
                            <div className='easy3step-right mb-5 mb-lg-0'>
                                <ul>
                                    <li>
                                        <span>1</span>
                                        <p>Select an upcoming Contests of your choice.</p>
                                    </li>
                                    <li>
                                        <span>2</span>
                                        <p>Use your Stocks knowledge to create Strategy and Group.</p>
                                    </li>
                                    <li>
                                        <span>3</span>
                                        <p>Join Contest with Entry Fees and Win Bigger Amount.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='easy3step-left'>
                                <img src={easy3step} className="img-fluid" alt="" />
                                <button>
                                    <i className="ri-play-mini-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="easy-everyone-section ptb60">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Why it's easy for Everyone</h2>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='easy-everyone-block'>
                                <img src={easyeveryone1} className="img-fluid" alt="" />
                                <p>Prediction Of Directions Only, No More Knowledge Requires</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='easy-everyone-block'>
                                <img src={easyeveryone2} className="img-fluid" alt="" />
                                <p>Prediction Of Prices Only, No More Knowledge Required</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='easy-everyone-block'>
                                <img src={easyeveryone3} className="img-fluid" alt="" />
                                <p>Risk Small ( Like a Cup Of Coffee ) & Win Mega Prizes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-preview ptb60">
                <div className="container">
                    <div className='app-preview-inner'>
                        <div className="section-title text-white text-center">
                            <h2>Our App Preview</h2>
                        </div>
                    </div>
                    <div className='app-preview-slider slider-arrow slider-arrow-bc'>
                        <Slider ref={(e) => (ap_slider.current = e)} {...apppreviewsliderOption}>
                            {apppreviewslider.map((data, index)=>{
                                return <div key={index} className='app-preview-block'>
                                    <img src={data.img} className="img-fluid" alt="" />
                                </div>
                            })}
                        </Slider>
                        <div className="slick-arrow text-center mt-4">
                            <a role={'button'} onClick={() => ap_slider.current.slickPrev()} className="slick-prev"></a>
                            <a role={'button'} onClick={() => ap_slider.current.slickNext()} className="slick-next"></a>
                        </div>
                    </div>
                </div>   
            </div>
            <div className='app-download-section pt100'>
                <div className="container">
                    <div className='row align-items-end flex-lg-row-reverse'>
                        <div className='col-md-6'>
                            <div className='app-download-right pb80'>
                                <h4>Download our App and Win Big</h4>
                                <div className='download-store d-flex'>
                                    <a role='button'><img src={googlepay} className="img-fluid" alt="" /></a>
                                    <a role='button'><img src={appstore} className="img-fluid" alt="" /></a>
                                </div>
                                <div className='qrcode-part d-flex align-items-center'>
                                    <a role='button'><img src={qrcode} className="img-fluid" alt="" /></a>
                                    <p>Scan the QR Code to Download The MegaMoves App</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='app-download-img'>
                                <img src={appdownloadimg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ptb100'>
                <div className="container">
                    <div className="section-title text-center">
                        <h2>FAQs</h2>
                    </div>
                    <div className="faqs-part">
                        <Collapse 
                        accordion 
                        defaultActiveKey={['1']} 
                        //expandIcon={({ isActive }) => isActive ? <i className="ri-arrow-up-s-fill"></i> : <i className="ri-arrow-down-s-fill"></i>}
                        >
                            <Panel header="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor" showArrow={false} key="1">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This panel can only be collapsed by clicking icon" showArrow={false} key="2">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This panel can't be collapsed" showArrow={false} key="3">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This panel can't be collapsed" showArrow={false} key="4">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        <Link to={'/faqs'} className='btn-theme btn-primary-border'>View All</Link>
                        <a role='button' className='btn-theme btn-theme-color'>TALK TO OUR EXPERT</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;