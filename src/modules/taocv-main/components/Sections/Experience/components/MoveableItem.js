import { useRef } from 'react';
import { 
    Input, Space, List, DatePicker, Popover, Divider,
} from 'antd';
import { 
    ConsoleSqlOutlined,
    EnvironmentOutlined 
} from '@ant-design/icons';
import PopoverTool from './PopoverTool';

const { RangePicker } = DatePicker;

const MoveableItem = (props) => {

    const { moveableItem, moveableItems, setMoveableItems, moveableItemObject } = props;

    /**
     * 
     */
    const handleInputRef = (event, type, payload) => {
        let { index } = moveableItem;
        let updateItem = {...moveableItems[index]};
        updateItem.skill = event.target.value || '';
        let newMoveableItems = [...moveableItems];
        newMoveableItems.splice(index, 1, updateItem);
        setMoveableItems(newMoveableItems);
    }

    return (
        <div>
            {
                moveableItem.index > 0 && moveableItem.index < moveableItems.length ? 
                <Divider 
                    dashed
                    style={{
                        marginTop: 8, marginBottom: 8,
                    }}
                /> : <></>
            }
            <div className="resume-item-holder line-item editable selected-resume-item">
                <Popover content={<PopoverTool {...props}/>} title="" trigger="focus">
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
                                                    onChange={(event) => handleInputRef(event)}
                                                    value={moveableItem.skill}
                                                />
                                            </div>
                                        </div>
                                        <div className="editable-field-wrapper relative">
                                            <div className="item-workplace ExperienceItemDefault-module_companyName">
                                                <Input 
                                                    placeholder="Company Name" 
                                                    bordered={false} 
                                                    style={{
                                                        paddingLeft: 0, paddingRight: 0, 
                                                        borderRadius: 0,
                                                        fontSize: 14,
                                                        color: 'rgb(30, 144, 255)',
                                                        fontWeight: 500,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="ExperienceItemDefault-module_withIconsContainer">
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
                                                    placeholder="Company Description" 
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
                                                        'Which of your achievements match the job you’re applying to?',
                                                        'Japanese princess to wed commoner.',
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
                </Popover>
            </div>
        </div>
    )
}

export default MoveableItem;