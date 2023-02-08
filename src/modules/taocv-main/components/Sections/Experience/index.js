import { useState } from 'react';

import { 
    Input, Space,
} from 'antd';
import './index.css';
import MoveableItem from './components/MoveableItem';

const Experience = (props) => {

    const [moveableItemObject, setMoveableItemObject] = useState({
        id: 0,
        skill: '',
        ten_congty: '',
        cong_viec: '',
        working_time_month_begin: '',
        working_time_year_begin: '',
        working_time_month_end: '',
        working_time_year_end: '',
        is_now: 0,
        order: 0,
        level_id: 0,
    });
    const [moveableItems, setMoveableItems] = useState([{
        id: 0,
        skill: '',
        ten_congty: '',
        cong_viec: '',
        working_time_month_begin: '',
        working_time_year_begin: '',
        working_time_month_end: '',
        working_time_year_end: '',
        is_now: 0,
        order: 0,
        level_id: 0,
    }]);

    return (
        <div id="ExperienceSection-0" className="ExperienceSection" style={{marginBottom: 14}}>
            <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <div className="ResumeSection-module_resumeSectionContainer">
                    <div>
                        <div className="resume-section-text-container">
                            <div className="editable-field-wrapper relative">
                                <Input 
                                    placeholder="Experience" 
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
                    {
                        moveableItems.map((moveableItem, index) => {
                            return (<MoveableItem 
                                    {...props} 
                                    moveableItem={{...moveableItem, index}}
                                    moveableItems={moveableItems}
                                    moveableItemObject={moveableItemObject}
                                    setMoveableItems={setMoveableItems}
                                    key={index}
                                />)
                        })
                    }
                    
                </div>
            </Space>
        </div>
    )
}

export default Experience;