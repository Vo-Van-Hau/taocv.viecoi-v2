import { 
    Input, Space, List, DatePicker,
} from 'antd';
import { 
    EnvironmentOutlined 
} from '@ant-design/icons';

const { RangePicker } = DatePicker;

const Projects = () => {

    return (
        <div id="ProjectsSection-0" className="ProjectsSection" style={{marginBottom: 14}}>
            <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <div className="ResumeSection-module_resumeSectionContainer">
                    <div>
                        <div className="resume-section-text-container">
                            <div className="editable-field-wrapper relative">
                                <Input 
                                    placeholder="Projects" 
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
                                        <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                                            <div className="work-container">
                                                <div>
                                                    <Input 
                                                        placeholder="Projects Name" 
                                                        bordered={false} 
                                                        style={{
                                                            paddingLeft: 0, paddingRight: 0, 
                                                            borderRadius: 0,
                                                            fontSize: 18,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="">
                                                <div>
                                                    <Space size="large">
                                                        <div>
                                                            <RangePicker  
                                                                bordered={false} 
                                                                size={'small'}
                                                                placeholder={['Start date', 'End date']}
                                                                picker='month'
                                                                style={{
                                                                    padding: 0,
                                                                    fontSize: 12,
                                                                }}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Input 
                                                                placeholder="Location" 
                                                                prefix={<EnvironmentOutlined />} 
                                                                bordered={false} 
                                                                style={{
                                                                    paddingLeft: 0, paddingRight: 0, 
                                                                    borderRadius: 0,
                                                                    fontSize: 12,
                                                                }}
                                                            />
                                                        </div>
                                                    </Space>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Input 
                                                        placeholder="Short summary of your work" 
                                                        bordered={false} 
                                                        style={{
                                                            paddingLeft: 0, paddingRight: 0, 
                                                            borderRadius: 0,
                                                            fontSize: 12,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="top-xty">
                                                <div>
                                                    <List
                                                        bordered={false}
                                                        dataSource={[
                                                            'What was a successful outcome of your work? (e.g. Raised $3,000 for the charity)',
                                                        ]}
                                                        split={false}
                                                        renderItem={(item) => (
                                                            <List.Item                                                                         
                                                                style={{
                                                                    padding: 0,
                                                                }}
                                                            >
                                                                <div>
                                                                    <span style={{marginRight: 6,}}>-</span>
                                                                </div>
                                                                <Input 
                                                                    placeholder={item}
                                                                    bordered={false} 
                                                                    style={{
                                                                        paddingLeft: 0, paddingRight: 0, 
                                                                        borderRadius: 0,
                                                                        fontSize: 12,
                                                                        width: '100%'
                                                                    }}
                                                                />
                                                            </List.Item>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </Space>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Divider /> */}
                    </div>
                </div>
            </Space>
        </div>
    )
}

export default Projects;