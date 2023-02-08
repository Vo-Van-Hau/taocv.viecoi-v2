import { 
    Input, Space, DatePicker,
} from 'antd';

const { RangePicker } = DatePicker;

const Volunteering = () => {
    return (
        <div id="VolunteeringSection-0" className="VolunteeringSection" style={{marginBottom: 14}}>
            <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <div className="ResumeSection-module_resumeSectionContainer">
                    <div>
                        <div className="resume-section-text-container">
                            <div className="editable-field-wrapper relative">
                                <Input 
                                    placeholder="Volunteering" 
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
                                                        placeholder="Title" 
                                                        bordered={false} 
                                                        style={{
                                                            paddingLeft: 0, paddingRight: 0, 
                                                            borderRadius: 0,
                                                            fontSize: 18,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="editable-field-wrapper relative">
                                                <div className="item-workplace">
                                                    <Input 
                                                        placeholder="Organization Name" 
                                                        bordered={false} 
                                                        style={{
                                                            paddingLeft: 0, paddingRight: 0, 
                                                            borderRadius: 0,
                                                            fontSize: 14,
                                                            color: 'rgb(30, 144, 255)'
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
                                                    </Space>
                                                </div>
                                            </div>
                                            <div className="work-container">
                                                <div>
                                                    <Input 
                                                        placeholder="How can this experience make you a better candidate for the job you’re applying to?" 
                                                        bordered={false} 
                                                        style={{
                                                            paddingLeft: 0, paddingRight: 0, 
                                                            borderRadius: 0,
                                                            fontSize: 12,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </Space>
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

export default Volunteering;