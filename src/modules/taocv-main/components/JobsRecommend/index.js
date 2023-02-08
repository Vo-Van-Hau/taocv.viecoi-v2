import { Avatar, List, Row, Col, Typography, Space, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const JobsRecommend = () => {

    return (
        <div>
            <div style={{
                
            }}>
                <Row>
                    <Col span={8}></Col>
                    <Col span={16}>
                       <div>
                            <div style={{
                                backgroundColor: '#e3e9f5',
                            }}>
                                <div>
                                    <div 
                                        style={{
                                            paddingLeft: 24, paddingTop: 24, paddingRight: 24,
                                            margin: 0
                                        }}
                                    >
                                        <Title level={4} style={{margin: 0}}>Recommended jobs</Title>
                                        <Text>We’ve found 20+ jobs that fit more than 90% to your resume</Text>
                                    </div>
                                </div>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={[
                                        {
                                            title: 'Senior Developer, Baseball Systems',
                                            company_name: '2K Czech',
                                            company_logo: 'https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/269/700/resized/2K_Logo_Red_solid_(5).png?1664375800',
                                            address: 'Ho Chi Minh City',
                                        },{
                                            title: 'Data Scientist',
                                            company_name: 'Boston Red Sox',
                                            company_logo: 'https://lever-client-logos.s3.us-west-2.amazonaws.com/3fcd8203-00a9-4862-af38-f4319bcd5502-1632854624658.png',
                                            address: 'Da Nang City',
                                        },{
                                            title: 'UI Engineer',
                                            company_name: 'Wacontre',
                                            company_logo: 'https://wacontre.com/wp-content/uploads/2021/05/logo-wacontre-it-2.png',
                                            address: 'Tokyo City',
                                        },{
                                            title: 'Death Battle Assistant Editor - Contract',
                                            company_name: 'Rooster Teeth',
                                            company_logo: 'https://viecoi.cdn.vccloud.vn/public/userdata/374437/1662693546193491.jpg',
                                            address: 'London, UK',
                                        },
                                    ]}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <div style={{
                                                    padding: 18,
                                                    backgroundColor: '#FFFFFF',
                                                    borderRadius: 8,
                                                    width: '100%',
                                            }}>
                                                    <div>
                                                        <Space direction="vertical" size={8} style={{ display: 'flex' }}>
                                                            <Title level={5} style={{margin: 0}}>{item.title}</Title>
                                                            <div>
                                                                <Space>
                                                                    <Avatar 
                                                                        size="small" 
                                                                        src={item.company_logo} 
                                                                        style={{
                                                                            border: '1px solid #42b72a',
                                                                        }}
                                                                    />
                                                                    <Text strong>{item.company_name}</Text>
                                                                </Space>
                                                            </div>
                                                            <div>
                                                                <Text>{item.address}</Text>
                                                            </div>
                                                            <div>
                                                                <Button icon={<EyeOutlined />}>View this job</Button>
                                                            </div>
                                                        </Space>
                                                    </div>
                                            </div>
                                        </List.Item>
                                    )}
                                />
                            </div>
                       </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default JobsRecommend;