import { Input, Space, Row, Col } from 'antd';
import {} from '@ant-design/icons';


const Certification = () => {

    return (
        <div id="CertificationSection-0" className="CertificationSection" style={{marginBottom: 14}}>
            <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <div className="ResumeSection-module_resumeSectionContainer">
                    <div>
                        <div className="resume-section-text-container">
                            <div className="editable-field-wrapper relative">
                                <Input 
                                    placeholder="Certification" 
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
                                                <div>
                                                    <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                                                        <div className="work-container">
                                                            <div>
                                                                <Input 
                                                                    placeholder="Certificate Name" 
                                                                    bordered={false} 
                                                                    style={{
                                                                        paddingLeft: 0, paddingRight: 0, 
                                                                        borderRadius: 0,
                                                                        fontSize: 15,
                                                                        fontWeight: 500,
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="editable-field-wrapper relative">
                                                            <div className="item-workplace">
                                                                <Input 
                                                                    placeholder="Which institution issued the certificate and when?" 
                                                                    bordered={false} 
                                                                    style={{
                                                                        paddingLeft: 0, paddingRight: 0, 
                                                                        borderRadius: 0,
                                                                        fontSize: 13,
                                                                        color: 'rgb(30, 144, 255)'
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </Space>
                                                </div>
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

export default Certification;