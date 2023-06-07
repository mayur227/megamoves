import React from 'react';
import { Input } from 'antd';

import newsimg from '../../assets/images/easy-3step.png';

const News = (props) => {

    return(
        <>
            <div className='banner-part'>
                <div className='page-title'>
                    <div className='page-title-inner'>
                        <div className="container">
                            <h2><span className='text-primary-color'>Latest</span> News</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="news-search pt-4">
                    <div className='form-group left-input-icon mb-4'>
                        <i className="ri-search-line left-icon"></i>
                        <Input placeholder="Search" className='form-control' />
                    </div>
                </div>
                <div className="news-list pb80">
                    <div className='row'>
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((data, index)=>{
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
                        <a role='button' className='btn-theme btn-primary-border'>LOAD MORE</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News;