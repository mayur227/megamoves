import React, { useState } from 'react';

import bannerimg from '../../assets/images/dist-banner-img.svg';
import easy3step from '../../assets/images/easy-3step.png';

import elitegroup from '../../assets/images/elite-group.svg';
import datadriven from '../../assets/images/about-us/data-driven.svg';
import userexperience from '../../assets/images/about-us/user-experience.svg';
import transparency from '../../assets/images/about-us/transparency.svg';
import newsimg from '../../assets/images/easy-3step.png';
import { Link } from 'react-router-dom';
import { Form, Input, Modal, Select, Steps, Upload, message } from 'antd';

//const { Step } = Steps;

const props = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const gstprops = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const steps = [
    {
      title: 'Personal information',
    },
    {
      title: 'Legal information',
    },
    {
      title: 'OTP Verification',
    }
];

const Distributor = () => {
    const [distModalOpen, setDistModalOpen] = useState(false);
    const distShowModal = () => {
        setDistModalOpen(true);
    };
    const distHideModal = () => {
        setDistModalOpen(false);
        setDistSuccess(false)
        setCurrentStep(0);
    };

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
      }));

    // Steps
    const [currentStep, setCurrentStep] = useState(0);
    const next = () => {
        setCurrentStep(currentStep + 1);
        };
    
    const prev = () => {
        setCurrentStep(currentStep - 1);
    };

    const optionState = [
        {value: 'Gujarat', label: 'Gujarat'},
        {value: 'Maharashtra', label: 'Maharashtra'},
        {value: 'Madhya Pradesh', label: 'Madhya Pradesh'},
        {value: 'karnataka', label: 'karnataka'},
        {value: 'Rajasthan', label: 'Rajasthan'}
    ]

    // Upload Image
    const [fileList, setFileList] = useState([]);
    const beforeUpload = async file => {
        setFileList([...file.fileList, file]);
        return false;
    }
    const handleChangefileupload = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const [gstfileList, setGstFileList] = useState([]);
    const gstbeforeUpload = async file => {
        setGstFileList([...file.gstfileList, file]);
        return false;
    }
    const gstChangefileupload = ({ fileList: newFileList }) => {
        setGstFileList(newFileList);
    };

    const [distSuccess, setDistSuccess] = useState(false);
    const onsubmit = () => {
        setDistSuccess(true)
    }
    

    return(
        <>
            <div className='full-banner-part'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-5">
                            <div className="full-banner-left mb-5 mb-lg-0">
                                <h1>JOIN NEW GEN <span className='text-primary-color'>HIGH TECH BUSINESS AS A </span>DISTRIBUTOR OF MEGAMOVES</h1>
                                <button className='btn-theme btn-theme-color min-w150' onClick={() => distShowModal()}>Register Now</button>
                            </div>
                        </div>    
                        <div className="col-lg-6 col-xl-7">
                            <div className="full-banner-imgs text-center">
                                <img src={bannerimg} className="img-fluid" alt="" />
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className='ptb100'>
                <div className="container">
                    <div className="row align-items-center flex-lg-row-reverse">
                        <div className="col-lg-6">
                            <div className="s-col-img mb-4 mb-lg-0 text-center">
                                <img src={elitegroup} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="s-col-content text-center text-lg-start pe-xl-5">
                                <div className="section-title mb-4">
                                    <h2><span className='text-primary-color'>Be part</span> of our Elite Group</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            </div>
                        </div>    
                        
                    </div>
                </div>
            </div>
            <div className='ptb100 bg-gray-light-2'>
                <div className="container">
                    <div className="section-title text-center">
                        <h2><span className='text-primary-color'>Benefits</span> of being a Distributor</h2>
                    </div>
                    <div className="row align-items-center dist-benefits-row">
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span><i className="ri-checkbox-circle-fill"></i></span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span><i className="ri-checkbox-circle-fill"></i></span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span><i className="ri-checkbox-circle-fill"></i></span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span><i className="ri-checkbox-circle-fill"></i></span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span><i className="ri-checkbox-circle-fill"></i></span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-blck">
                                <span><i className="ri-checkbox-circle-fill"></i></span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="easy3step ptb100">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>How to become a <span className='text-primary-color'>Distributor</span></h2>
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

            <div className="ptb100 bg-gray-light-2">
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
            <div className='ptb100'>
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

            <Modal title={<span>Become a <span className='text-primary-color'>Distributor</span></span>} centered width={730} footer={null} className='dist-register-modal header-heading-style' open={distModalOpen} onCancel={distHideModal}>
                <div className='dist-form-container'>
                    {
                        distSuccess == false ? 
                        <>
                            <div className='dist-main-steps'>
                                <Steps current={currentStep} items={items} />
                            </div>
                            <div className='dist-main-form d-flex justify-content-center align-items-center w-100 pt-3'>
                                <Form className='w-100'>
                                    <div className={`dist-step ${ currentStep === 0 ? "active" : ""}`}>
                                        <div className='dist-step-content'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label>First Name</label>
                                                        <Input placeholder="First Name" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label>Last Name</label>
                                                        <Input placeholder="Last Name" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label>Mobile Number</label>
                                                        <Input placeholder="Mobile Number" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label>Email</label>
                                                        <Input placeholder="Email" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label>State</label>
                                                        <Select 
                                                            className="select-control d-block" 
                                                            allowClear={true} 
                                                            showSearch={true} 
                                                            clearIcon={<i className="ri-close-fill"></i>} 
                                                            suffixIcon={<i className="ri-arrow-down-s-line"></i>} getPopupContainer={node => node.parentNode} 
                                                            placeholder="Select State"
                                                            options={[
                                                                {value: 'Gujarat', label: 'Gujarat'},
                                                                {value: 'Maharashtra', label: 'Maharashtra'},
                                                                {value: 'Madhya Pradesh', label: 'Madhya Pradesh'},
                                                                {value: 'karnataka', label: 'karnataka'},
                                                                {value: 'Rajasthan', label: 'Rajasthan'}
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label>City</label>
                                                        <Select 
                                                            className="select-control d-block" 
                                                            allowClear={true} 
                                                            showSearch={true} 
                                                            clearIcon={<i className="ri-close-fill"></i>} 
                                                            suffixIcon={<i className="ri-arrow-down-s-line"></i>} getPopupContainer={node => node.parentNode} 
                                                            placeholder="Select City"
                                                            options={[
                                                                {value: 'surat', label: 'Surat'},
                                                                {value: 'ahmedabad', label: 'Ahmedabad'},
                                                                {value: 'vadodara', label: 'Vadodara'},
                                                                {value: 'mumbai', label: 'Mumbai'},
                                                                {value: 'rajkot', label: 'Rajkot'},
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Personal Address</label>
                                                        <Input placeholder="Address Line-1" className='form-control mb-2' />
                                                        <Input placeholder="Address Line-2" className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`dist-step ${ currentStep === 1 ? "active" : ""}`}>
                                        <div className='dist-step-content'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='form-group'>
                                                        <label>PAN Number</label>
                                                        <Input placeholder="PAN Number" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-group'>
                                                        <label>GST Number</label>
                                                        <Input placeholder="GST Number" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label>PAN Card Proof Doc</label>
                                                        <div className='upload-part'>
                                                            <Upload 
                                                                {...props} 
                                                                id="pancard_upload"
                                                                name="pancard_upload"
                                                                fileList={fileList} 
                                                                listType="picture" 
                                                                beforeUpload={beforeUpload}
                                                                onChange={handleChangefileupload}
                                                            >
                                                                {
                                                                    fileList.length < 1 && 
                                                                    <div className="upload-botton">
                                                                        <i className="ri-upload-2-line"></i>
                                                                        <h6>Upload PAN Card</h6>
                                                                        <p>Drag and Drop or Click to Browse</p>
                                                                    </div>
                                                                }
                                                            </Upload>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <label>GST Proof Doc</label>
                                                        <div className='upload-part'>
                                                            <Upload 
                                                                {...gstprops} 
                                                                id="gst_doc_upload"
                                                                name="gst_doc_upload"
                                                                fileList={gstfileList} 
                                                                listType="picture" 
                                                                beforeUpload={gstbeforeUpload}
                                                                onChange={gstChangefileupload}
                                                            >
                                                                {
                                                                    gstfileList.length < 1 && 
                                                                    <div className="upload-botton">
                                                                        <i className="ri-upload-2-line"></i>
                                                                        <h6>Upload GST Certificate</h6>
                                                                        <p>Drag and Drop or Click to Browse</p>
                                                                    </div>
                                                                }
                                                            </Upload>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Billing Address</label>
                                                        <Input placeholder="Address Line-1" className='form-control mb-2' />
                                                        <Input placeholder="Address Line-2" className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                     
                                    </div>
                                    <div className={`dist-step ${ currentStep === 2 ? "active" : ""}`}>
                                        <div className='dist-step-content pt-4'>
                                            <div className='verify-otp text-center'>
                                                <h5>Verify OTP</h5>
                                                <p>We have sent verification code to your Mobile Number and Email address. Please enter the respective Code below to verify your account.</p>
                                                <div className='form-group mb-4'>
                                                    <label className='mb-2'>Email OTP</label>
                                                    <div className='d-flex justify-content-center gap-2'>
                                                        <Input placeholder='0' className='form-control' />
                                                        <Input placeholder='0' className='form-control' />
                                                        <Input placeholder='0' className='form-control' />
                                                        <Input placeholder='0' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='form-group mb-0'>
                                                    <label className='mb-2'>Mobile OTP</label>
                                                    <div className='d-flex justify-content-center gap-2'>
                                                        <Input placeholder='0' className='form-control' />
                                                        <Input placeholder='0' className='form-control' />
                                                        <Input placeholder='0' className='form-control' />
                                                        <Input placeholder='0' className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>           
                                    </div>

                                    <div className="dist-step-action d-flex gap-4 mt-3">
                                        {currentStep === 0 && (
                                            <button className="btn-theme dist-modal-prev flex-1" onClick={()=>distHideModal()}>Cancel</button>
                                        )}
                                        {currentStep > 0 && (
                                            <button className="btn-theme dist-modal-prev flex-1" onClick={() => prev()}>Previous</button>
                                        )}
                                        {currentStep < steps.length - 1 && (
                                            <button onClick={() => next()} className="btn-theme btn-theme-color flex-1">Next</button>
                                        )}
                                        {currentStep === steps.length - 1 && (
                                            <button className="btn-theme btn-theme-color flex-1" onClick={() => onsubmit()}>Submit</button>
                                        )}
                                    </div>
                                </Form>
                            </div>
                        </>
                        :
                        <div className='dist-success-view'>
                            <i className="ri-checkbox-circle-fill"></i>
                            <h5>Success</h5>
                            <p>Your journey as distributor of MegaMoves is started, our team will connect you soon</p>
                            <button className="btn-theme btn-theme-color min-w150" onClick={()=>distHideModal()}>Ok</button>
                        </div>
                    }
                </div>
            </Modal>
        </>
    )
}

export default Distributor;