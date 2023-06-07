import React from 'react';
import { Collapse, Input } from 'antd';

import hplyimg1 from '../../assets/images/app-previewimg-1.png';


const Faqs = () => {

    const { Panel } = Collapse;

    const text = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet`;

    return(
        <>
            <div className='banner-part'>
                <div className='page-title'>
                    <div className='page-title-inner'>
                        <div className="container">
                            <h2>Faqs</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-4 pb60'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-4 col-xl-3'>
                            <div className="how-ply-left">
                                <div className="how-ply-topic">
                                    <ul>
                                        <li><a role={'button'} className='active'>Topic-1</a></li>
                                        <li><a role={'button'}>Topic-2</a></li>
                                        <li><a role={'button'}>Topic-3</a></li>
                                        <li><a role={'button'}>Topic-4</a></li>
                                        <li><a role={'button'}>Topic-5</a></li>
                                        <li><a role={'button'}>Topic-6</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-xl-9'>
                            <div className="faqs-right">
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
                                <a role='button' className='btn-theme btn-theme-color'>TALK TO OUR EXPERT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs;