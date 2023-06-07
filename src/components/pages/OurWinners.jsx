import React, { useEffect, useState } from 'react';
import { DatePicker, Input, Space, TimePicker } from 'antd';

import winnersimg from '../../assets/images/avatar.png';

const OurWinners = () => {
    //const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const [filterOpen, SetfilterOpen] = useState(false);
    const filterToggle = () => {
        filterOpen ? SetfilterOpen(false) : SetfilterOpen(true)
    }

    return(
        <>
            <div className='banner-part'>
                <div className='page-title'>
                    <div className='page-title-inner'>
                        <div className="container">
                            <h2><span className='text-primary-color'>Our</span> Winners</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-4 pb60'>
                <div className="container">
                    <div className='winners-filter'>
                        <div className='row form-row'>
                            <div className='col-12 col-md-4 col-xl-2'>
                                <div className='winner-search-part form-group d-flex gap-2'>
                                    <div className='winner-search-input left-input-icon'>
                                        <i className="ri-search-line left-icon"></i>
                                        <Input placeholder="Search any Topic" className='form-control' />
                                    </div>
                                    <button className='filter-btn d-md-none' onClick={filterToggle}>
                                        {
                                            filterOpen == false ? <i className="ri-filter-line"></i> : <i className="ri-close-fill"></i>
                                        }
                                    </button>
                                </div>
                            </div>
                            <div className={`w-search-hide col-12 col-md-4 col-xl-3 ${filterOpen == false ? '': 'show'}`}>
                                <div className='form-group'>
                                    <Space direction="vertical">
                                        <DatePicker.RangePicker separator={<i className="ri-subtract-fill"></i>} suffixIcon={<i className="ri-calendar-line"></i>} />
                                    </Space>
                                </div>
                            </div>
                            <div className={`w-search-hide col-12 col-md-4 col-xl-3 ${filterOpen == false ? '': 'show'}`}>
                                <div className='form-group'>
                                    <Space direction="vertical">
                                        <TimePicker.RangePicker separator={<i className="ri-subtract-fill"></i>} suffixIcon={<i className="ri-time-line"></i>} />
                                    </Space>
                                </div>
                            </div>
                            <div className={`w-search-hide col-12 col-md-4 col-xl-2 ${filterOpen == false ? '': 'show'}`}>
                                <div className='form-group left-input-icon'>
                                    <i className="ri-map-pin-line left-icon"></i>
                                    <Input placeholder="Search" className='form-control' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='d-flex'>
                                    <button type="submit" className="btn-theme btn-theme-color">Apply</button>
                                    <button className="btn-theme btn-primary-border ms-2">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='winnercard-view'>
                        <div className='row'>
                            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((data, index)=>{
                                return <div key={index} className="col-6 col-lg-4 col-xl-3">
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
                                    </div>
                            })}
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <a role='button' className='btn-theme btn-primary-border'>LOAD MORE</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurWinners;