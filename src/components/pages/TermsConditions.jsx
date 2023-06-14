import { Collapse } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    const { Panel } = Collapse;
    const [windowwidth, setWindowWidth] = useState(window.innerWidth);
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("load", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return(
        <>
            <div className='banner-part'>
                <div className='page-title'>
                    <div className='page-title-inner'>
                        <div className="container">
                            <h2><span className='text-primary-color'>Terms</span> & Conditions</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-lg-4 ptb60'>
                <div className="container">
                    <div className='row'>
                        {
                            windowwidth > 991 ? 
                            <div className='col-lg-4 col-xl-3'>
                                <div className="how-ply-left">
                                    <div className="how-ply-topic">
                                        <ul>
                                            <li><Link to={'/disclaimer'}>Disclaimer</Link></li>
                                            <li><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
                                            <li><Link to={'/terms-conditions'} className='active'>Terms & Conditions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            :
                            ''
                        }
                        <div className='col-lg-8 col-xl-9'>
                            {
                                windowwidth > 991 ? 
                                <div className="content-right content-text">
                                    <h5 className='mt-0'>Terms & Conditions</h5>
                                    <h6>Spam</h6>
                                    <ul>
                                        <li>Spam is any repeated, unwanted, unsolicited actions, whether automated or manual, that negatively affect the communities on the Dream11 Platform. To avoid being a spammer, do not do any of the following:</li>
                                        <li>Post, share, engage with Content, or create accounts, groups, pages, events, either manually or automatically, at very high frequencies;</li>
                                        <li>Direct users of the Dream11 Platform directly or indirectly to leave the Dream11 Platform for another website by posting misleading content, re-directing users to defective pop-up websites or impersonating well-known brands; </li>
                                        <li>Link to harmful third-party content, such as malware, phishing websites, deceptive pop-ups, etc. </li>
                                        <li>Incentivise users to partake in some kind of monetary action for the purpose of gaining any unfair or undue advantage on the Dream11 Platform; </li>
                                        <li>Program bots that harm the Dream11 Plaform, including bots intended to promote content, products or services; </li>
                                        <li>Repeatedly contact people for commercial purposes without their consent;</li>
                                        <li>Post repetitive comments across the Dream11 Platform multiple times without any context or post Content that include the words “follow me” in standalone form. Do note, however, that genuine instances where the words “follow me” come up contextually and naturally will not be included in this category; </li>
                                        <li>Post repetitive Content or comments promoting other fantasy sports platforms, Telegram or Whatsapp groups or repeatedly mentioning names of competitors on the Dream11 Platform. </li>
                                        <li>Posting any form of content that can make any other user believe about your association with any brand, company, trust, organisation, community or service that provides information/ tips/ tricks/ hacks/ cheats on Fantasy games offered on Dream11 Platform. </li>
                                    </ul>
                                </div>
                                :
                                <div className="how-ply-collapse">
                                    <Collapse 
                                        accordion 
                                        defaultActiveKey={['3']} 
                                        >
                                        <Panel header="Disclaimer" showArrow={false} key="1">
                                            <div className="content-right content-text">
                                                <h5>Disclaimer</h5>
                                                <h6>Spam</h6>
                                                <ul>
                                                    <li>Spam is any repeated, unwanted, unsolicited actions, whether automated or manual, that negatively affect the communities on the Dream11 Platform. To avoid being a spammer, do not do any of the following:</li>
                                                    <li>Post, share, engage with Content, or create accounts, groups, pages, events, either manually or automatically, at very high frequencies;</li>
                                                    <li>Direct users of the Dream11 Platform directly or indirectly to leave the Dream11 Platform for another website by posting misleading content, re-directing users to defective pop-up websites or impersonating well-known brands; </li>
                                                    <li>Link to harmful third-party content, such as malware, phishing websites, deceptive pop-ups, etc. </li>
                                                    <li>Incentivise users to partake in some kind of monetary action for the purpose of gaining any unfair or undue advantage on the Dream11 Platform; </li>
                                                    <li>Program bots that harm the Dream11 Plaform, including bots intended to promote content, products or services; </li>
                                                    <li>Repeatedly contact people for commercial purposes without their consent;</li>
                                                    <li>Post repetitive comments across the Dream11 Platform multiple times without any context or post Content that include the words “follow me” in standalone form. Do note, however, that genuine instances where the words “follow me” come up contextually and naturally will not be included in this category; </li>
                                                    <li>Post repetitive Content or comments promoting other fantasy sports platforms, Telegram or Whatsapp groups or repeatedly mentioning names of competitors on the Dream11 Platform. </li>
                                                    <li>Posting any form of content that can make any other user believe about your association with any brand, company, trust, organisation, community or service that provides information/ tips/ tricks/ hacks/ cheats on Fantasy games offered on Dream11 Platform. </li>
                                                </ul>
                                            </div>
                                        </Panel>
                                        <Panel header="Privacy Policy" showArrow={false} key="2">
                                            <div className="content-right content-text">
                                                <h5>Privacy Policy</h5>
                                                <h6>Spam</h6>
                                                <ul>
                                                    <li>Spam is any repeated, unwanted, unsolicited actions, whether automated or manual, that negatively affect the communities on the Dream11 Platform. To avoid being a spammer, do not do any of the following:</li>
                                                    <li>Post, share, engage with Content, or create accounts, groups, pages, events, either manually or automatically, at very high frequencies;</li>
                                                    <li>Direct users of the Dream11 Platform directly or indirectly to leave the Dream11 Platform for another website by posting misleading content, re-directing users to defective pop-up websites or impersonating well-known brands; </li>
                                                    <li>Link to harmful third-party content, such as malware, phishing websites, deceptive pop-ups, etc. </li>
                                                    <li>Incentivise users to partake in some kind of monetary action for the purpose of gaining any unfair or undue advantage on the Dream11 Platform; </li>
                                                    <li>Program bots that harm the Dream11 Plaform, including bots intended to promote content, products or services; </li>
                                                    <li>Repeatedly contact people for commercial purposes without their consent;</li>
                                                    <li>Post repetitive comments across the Dream11 Platform multiple times without any context or post Content that include the words “follow me” in standalone form. Do note, however, that genuine instances where the words “follow me” come up contextually and naturally will not be included in this category; </li>
                                                    <li>Post repetitive Content or comments promoting other fantasy sports platforms, Telegram or Whatsapp groups or repeatedly mentioning names of competitors on the Dream11 Platform. </li>
                                                    <li>Posting any form of content that can make any other user believe about your association with any brand, company, trust, organisation, community or service that provides information/ tips/ tricks/ hacks/ cheats on Fantasy games offered on Dream11 Platform. </li>
                                                </ul>
                                            </div>
                                        </Panel>
                                        <Panel header="Terms & Conditions" showArrow={false} key="3">
                                            <div className="content-right content-text">
                                                <h5>Terms & Conditions</h5>
                                                <h6>Spam</h6>
                                                <ul>
                                                    <li>Spam is any repeated, unwanted, unsolicited actions, whether automated or manual, that negatively affect the communities on the Dream11 Platform. To avoid being a spammer, do not do any of the following:</li>
                                                    <li>Post, share, engage with Content, or create accounts, groups, pages, events, either manually or automatically, at very high frequencies;</li>
                                                    <li>Direct users of the Dream11 Platform directly or indirectly to leave the Dream11 Platform for another website by posting misleading content, re-directing users to defective pop-up websites or impersonating well-known brands; </li>
                                                    <li>Link to harmful third-party content, such as malware, phishing websites, deceptive pop-ups, etc. </li>
                                                    <li>Incentivise users to partake in some kind of monetary action for the purpose of gaining any unfair or undue advantage on the Dream11 Platform; </li>
                                                    <li>Program bots that harm the Dream11 Plaform, including bots intended to promote content, products or services; </li>
                                                    <li>Repeatedly contact people for commercial purposes without their consent;</li>
                                                    <li>Post repetitive comments across the Dream11 Platform multiple times without any context or post Content that include the words “follow me” in standalone form. Do note, however, that genuine instances where the words “follow me” come up contextually and naturally will not be included in this category; </li>
                                                    <li>Post repetitive Content or comments promoting other fantasy sports platforms, Telegram or Whatsapp groups or repeatedly mentioning names of competitors on the Dream11 Platform. </li>
                                                    <li>Posting any form of content that can make any other user believe about your association with any brand, company, trust, organisation, community or service that provides information/ tips/ tricks/ hacks/ cheats on Fantasy games offered on Dream11 Platform. </li>
                                                </ul>
                                            </div>
                                        </Panel>
                                    </Collapse>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermsConditions;