import { 
    Input, Space,
} from 'antd';

const Summary = () => {
    return (
        <div id="SummarySection-0" className="SummarySection" style={{marginBottom: 14}}>
            <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <div className="ResumeSection-module_resumeSectionContainer">
                    <div>
                        <div className="resume-section-text-container">
                            <div className="editable-field-wrapper relative">
                                <Input 
                                    placeholder="Summary" 
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
                                                        placeholder="What’s the one thing that makes you the best candidate for this job?" 
                                                        bordered={false} 
                                                        style={{
                                                            paddingLeft: 0, paddingRight: 0, 
                                                            borderRadius: 0,
                                                            fontSize: 14,
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

export default Summary;