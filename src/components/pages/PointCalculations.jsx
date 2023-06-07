import React from 'react';
import hplyimg1 from '../../assets/images/app-previewimg-1.png';

const PointCalculations = () => {
    return(
        <>
            <div className='banner-part'>
                <div className='page-title'>
                    <div className='page-title-inner'>
                        <div className="container">
                        <h2><span className='text-primary-color'>Point</span> Calculations</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-4'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-4 col-xl-3'>
                            <div className="how-ply-left">
                                <div className="how-ply-topic">
                                    <ul>
                                        <li><a role={'button'} className='active'>Category-1 Points</a></li>
                                        <li><a role={'button'}>Category-2 Points</a></li>
                                        <li><a role={'button'}>Category-3 Points</a></li>
                                        <li><a role={'button'}>Category-4 Points</a></li>
                                        <li><a role={'button'}>Category-5 Points</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-xl-9'>
                            <div className="how-ply-right points-right">
                                <h3 className='mb-4'>Category-1 Points</h3>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="points-right-img mb-4">
                                            <img src={hplyimg1} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className="points-right-content mb-4">
                                            <ul className='points-lists mb-3'>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num loss'>+15</div>
                                                </li>
                                            </ul>
                                            <ul className='dots-style'>
                                                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                                                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</li>
                                                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                                                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</li>
                                                <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="how-ply-right-img mb-4">
                                            <img src={hplyimg1} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className="points-right-content mb-4">
                                            <ul className='points-lists mb-3'>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num win'>+10</div>
                                                </li>
                                                <li>
                                                    <span>point Name</span>
                                                    <div className='points-num loss'>+15</div>
                                                </li>
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

export default PointCalculations;