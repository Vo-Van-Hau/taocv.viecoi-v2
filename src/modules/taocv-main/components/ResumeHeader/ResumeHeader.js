import { useContext } from 'react';

import './index.css';
import { 
    Input, Space, Col, Row 
} from 'antd';
import { 
    PhoneOutlined, MailOutlined, LinkOutlined, EnvironmentOutlined 
} from '@ant-design/icons';

import { CoreContext } from '../Contexts/CoreContext';

const ResumeHeader = (props) => {

    const { data } = useContext(CoreContext); 
    const { YourCV } = data;
    const { users, jobseeker_details, resumes } = YourCV;

    return (
        <div>
            <div>
                <div className="ResumePage-module_columnContainer">
                    <Space
                        direction="vertical"
                        size={0}
                        style={{
                            display: 'flex',
                        }}
                    >
                        <div>
                            <Input
                                placeholder="Your Name"  
                                bordered={false} 
                                style={{
                                    paddingLeft: 0, paddingRight: 0, 
                                    fontWeight: 500,
                                    borderRadius: 0,
                                    fontSize: 38,
                                    textTransform: 'uppercase',
                                    padding: 0,
                                }}
                                defaultValue={users.name || ''}
                            />
                        </div>
                        <div className="resume-header-title-placeholder" style={{marginBottom: 8}}> 
                            <Input 
                                placeholder="The role you are applying for?" 
                                bordered={false} 
                                style={{
                                    paddingLeft: 0, paddingRight: 0, 
                                    fontWeight: 500,
                                    borderRadius: 0,
                                    fontSize: 19,
                                    padding: 0,
                                    color: 'rgb(30, 144, 255)',
                                }}
                                defaultValue={resumes.resume_title || ''}
                            />
                        </div>
                        <div>
                            <Row>
                                <Space
                                    direction="horizontal"
                                    size="small"
                                    style={{
                                        display: 'flex',
                                    }}
                                >
                                    <Col span="24">
                                        <Input 
                                            placeholder="Phone" 
                                            prefix={<PhoneOutlined />} 
                                            bordered={false} 
                                            style={{
                                                paddingLeft: 0, paddingRight: 0, 
                                                borderRadius: 0,
                                                fontSize: 12,
                                                padding: 0,
                                                color: 'rgb(30, 144, 255)',
                                            }}
                                            defaultValue={jobseeker_details.phone || ''}
                                        />
                                    </Col>
                                    <Col span="24">
                                        <Input 
                                            placeholder="Email" 
                                            prefix={<MailOutlined />} 
                                            bordered={false} 
                                            style={{
                                                paddingLeft: 0, paddingRight: 0, 
                                                borderRadius: 0,
                                                fontSize: 12,
                                                padding: 0,
                                                color: 'rgb(30, 144, 255)',
                                            }}
                                            defaultValue={users.email || ''}
                                        />
                                    </Col>
                                    <Col span="24">
                                        <Input 
                                            placeholder="Website/Link" 
                                            prefix={<LinkOutlined />} 
                                            bordered={false} 
                                            style={{
                                                paddingLeft: 0, paddingRight: 0, 
                                                borderRadius: 0,
                                                fontSize: 12,
                                                padding: 0,
                                                color: 'rgb(30, 144, 255)',
                                            }}
                                        />
                                    </Col>
                                    <Col span="24">
                                        <Input 
                                            placeholder="Location" 
                                            prefix={<EnvironmentOutlined />} 
                                            bordered={false} 
                                            style={{
                                                paddingLeft: 0, paddingRight: 0, 
                                                borderRadius: 0,
                                                fontSize: 12,
                                                padding: 0,
                                                color: 'rgb(30, 144, 255)',
                                            }}
                                            defaultValue={jobseeker_details.address || ''}
                                        />
                                    </Col>
                                </Space>
                            </Row>
                        </div>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default ResumeHeader;