import { Input, Modal } from 'antd';
import React from 'react';

const DownloadAppModal = (props) => {
    const { isModalOpen, handleCancel} = props;
    return(
        <>
            <Modal title="Download Our Official App" centered width={650} footer={null} className='download-app-modal' open={isModalOpen} onCancel={handleCancel}>
                <div className='dnl-app-from flex-1'>
                    <form className="d-sm-flex">
                        <div className='form-group d-flex align-items-center mb-0 ms-0'>
                            <div className='country-code'>
                                <span>+91</span>
                            </div>
                            <Input placeholder="Enter Mobile Number" className='form-control' />
                        </div>
                        <button type="submit" className="btn-theme btn-theme-color">Get App Link</button>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default DownloadAppModal;