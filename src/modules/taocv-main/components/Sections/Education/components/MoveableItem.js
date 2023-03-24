import { useRef } from 'react';
import moment from 'moment';
import dayjs from 'dayjs';
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

    const { moveableItem, moveableItems, moveableItemObject } = props;

    /**
     * 
     */
    const handleInputRef = (event, type, payload) => {
        let { index } = moveableItem;
        let updateItem = {...moveableItems[index]};
        updateItem.skill = event.target.value || '';
        let newMoveableItems = [...moveableItems];
        newMoveableItems.splice(index, 1, updateItem);
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
            <div className="resume-item-holder line-item editable">
                <Popover content={<PopoverTool {...props}/>} title="" trigger="focus">
                    <div>
                        <div className="item-object">
                            <div className="inner">
                                <div>
                                    <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                                        <div className="work-container">
                                            <div>
                                                <Input 
                                                    placeholder="Degree and Field of Study" 
                                                    bordered={false} 
                                                    style={{
                                                        paddingLeft: 0, paddingRight: 0, 
                                                        borderRadius: 0,
                                                        fontSize: 18,
                                                    }}
                                                    defaultValue={moveableItem.specialization_name || ''}
                                                />
                                            </div>
                                        </div>
                                        <div className="editable-field-wrapper relative">
                                            <div className="item-workplace">
                                                <Input 
                                                    placeholder="School or University" 
                                                    bordered={false} 
                                                    style={{
                                                        paddingLeft: 0, paddingRight: 0, 
                                                        borderRadius: 0,
                                                        fontSize: 14,
                                                        color: 'rgb(30, 144, 255)',
                                                        fontWeight: 500,
                                                    }}
                                                    defaultValue={moveableItem.institute || ''}
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