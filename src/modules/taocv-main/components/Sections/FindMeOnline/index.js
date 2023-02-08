import { Input, Space, Row, Col, Avatar, Divider } from 'antd';
import { FacebookOutlined, SkypeOutlined } from '@ant-design/icons';

const FindMeOnline = () => {
    return (
        <div id="FindMeOnlineSection-0" className="FindMeOnlineSection" style={{marginBottom: 14}}>
            <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <div className="ResumeSection-module_resumeSectionContainer">
                    <div>
                        <div className="resume-section-text-container">
                            <div className="editable-field-wrapper relative">
                                <Input 
                                    placeholder="Find Me Online" 
                                    bordered={false} 
                                    style={{
                                        paddingLeft: 0, paddingRight: 0, 
                                        borderBottom: '3px solid #000000',
                                        fontWeight: 500,
                                        borderRadius: 0,
                                        fontSize: 22,
                                        textTransform: 'uppercase',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ResumeSection-module_moveableItems">
                    <div className="resume-item-holder line-item editable">
                        <div>
                            <div className="item-object">
                                <div className="inner">
                                    <div>
                                        <Row>
                                            <Col span={24}>
                                                <Space>
                                                    <div>
                                                        <Avatar 
                                                            style={{
                                                                backgroundColor: '#ffffff',
                                                                color: '#f56a00',
                                                            }}
                                                            icon={<FacebookOutlined style={{
                                                                color: '#1877f2'
                                                            }}/>} 
                                                        />
                                                    </div>
                                                    <div>
                                                        <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                                                            <div className="work-container">
                                                                <div>
                                                                    <Input 
                                                                        placeholder="Facebook" 
                                                                        bordered={false} 
                                                                        style={{
                                                                            paddingLeft: 0, paddingRight: 0, 
                                                                            paddingBottom: 0, paddingTop: 0,
                                                                            borderRadius: 0,
                                                                            fontSize: 15,
                                                                            fontWeight: 800,
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="editable-field-wrapper relative">
                                                                <div className="item-workplace">
                                                                    <Input 
                                                                        placeholder="https://www.facebook.com/" 
                                                                        bordered={false} 
                                                                        style={{
                                                                            paddingLeft: 0, paddingRight: 0, 
                                                                            paddingBottom: 0, paddingTop: 0,
                                                                            borderRadius: 0,
                                                                            fontSize: 13,
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </Space>
                                                    </div>
                                                </Space>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider 
                        dashed 
                        style={{
                            marginBottom: 8, marginTop: 8,
                            borderColor: 'rgba(5, 5, 5, 0.2)'
                        }}
                    />
                    <div className="resume-item-holder line-item editable">
                        <div>
                            <div className="item-object">
                                <div className="inner">
                                    <div>
                                        <Row>
                                            <Col span={24}>
                                                <Space>
                                                    <div>
                                                        <Avatar 
                                                            style={{
                                                                backgroundColor: '#ffffff',
                                                                color: '#f56a00',
                                                            }}
                                                            icon={<SkypeOutlined style={{
                                                                color: '#01abe8'
                                                            }}/>} 
                                                        />
                                                    </div>
                                                    <div>
                                                        <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                                                            <div className="work-container">
                                                                <div>
                                                                    <Input 
                                                                        placeholder="Skype" 
                                                                        bordered={false} 
                                                                        style={{
                                                                            paddingLeft: 0, paddingRight: 0, 
                                                                            paddingBottom: 0, paddingTop: 0,
                                                                            borderRadius: 0,
                                                                            fontSize: 15,
                                                                            fontWeight: 800,
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="editable-field-wrapper relative">
                                                                <div className="item-workplace">
                                                                    <Input 
                                                                        placeholder="https://www.skype.com/en/" 
                                                                        bordered={false} 
                                                                        style={{
                                                                            paddingLeft: 0, paddingRight: 0, 
                                                                            paddingBottom: 0, paddingTop: 0,
                                                                            borderRadius: 0,
                                                                            fontSize: 13,
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </Space>
                                                    </div>
                                                </Space>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Space>
        </div>
    )
}

export default FindMeOnline;