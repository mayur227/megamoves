import React, { useEffect, useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import PageLoader from '../common/PageLoader';
import HeadTag from '../common/HeadTag';
import DownloadAppModal from '../common/DownloadAppModal';

const AllUseContext = createContext();

const Master = (props) => {
    const { ptitle, ActiveMenuKey } = props;
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }, [location]);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rightbarvisible, setRightbarVisible] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
        setRightbarVisible(false);
    };
    const showSidebarDrawer = () => {
        rightbarvisible ? setRightbarVisible(false) : setRightbarVisible(true);
    };
    const rightbarClose = () => {
        setRightbarVisible(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(
        <>  
            <HeadTag pageTitle={ptitle} />
            <PageLoader loading={loading} />
            <div className={`main-wrapper ${location.pathname === '/' ? 'home-wrapper':''}`}>
                <Header showModal={showModal} rightbarvisible={rightbarvisible} showSidebarDrawer={showSidebarDrawer} rightbarClose={rightbarClose} />
                <div className="main-content-sections">
                    <AllUseContext.Provider value={{ActiveMenuKey}}>
                        <Outlet/>
                    </AllUseContext.Provider>
                </div>
                <Footer showModal={showModal} />
            </div>
            <DownloadAppModal isModalOpen={isModalOpen} handleCancel={handleCancel} />
        </>
    )
}
export default Master;
export {AllUseContext};