import React from 'react';
import { Col, Row, Space } from 'antd';

import ResumeHeader from './components/ResumeHeader/ResumeHeader';
import ResumeBody from './components/ResumeBody/ResumeBody';
import ResumeFooter from './components/ResumeFooter/ResumeFooter';
import Toolbox from './components/Toolbox';
import JobsRecommend from './components/JobsRecommend';

const Taocv = (props) => {

     
    return (
        <div className="app resume-editor-page">
            <div className="app-inner">
                <div className="editor-wrapper">
                    <Row>
                        <Col span={6}>
                            <Toolbox {...props}/>
                        </Col>
                        <Col span={12} className="resume-editor-content-box">
                            <div className="resume-editor-wrapper">
                                <div className="resume-renderer">
                                    <div
                                        style={{
                                            position: 'absolute',
                                            width: '-webkit-fill-available',
                                            height: '100%',
                                        }}
                                    >
                                        <div className="resume-background-wrapper" style={{
                                            backgroundSize: 'cover',
                                            backgroundImage: "url('https://app.enhancv.com/497c8edd9d16219ac835827065e5767b.png')",
                                            width: '100%',
                                            height: '100%',
                                        }}></div>
                                    </div>
                                    <div className="resume-renderer-page browser-resume-page" style={{
                                        padding: '30px 60px 20px',
                                        border: '1px solid #E0E0E0',
                                        position: 'relative',
                                    }}>
                                        <div className="resume-page-wrapper">
                                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                                <ResumeHeader {...props}/>
                                                <ResumeBody {...props}/> 
                                            </Space>
                                        </div>
                                        <Row>
                                            <Col span={24}>
                                                <ResumeFooter {...props}/>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <JobsRecommend {...props}/>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Taocv;