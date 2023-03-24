import { useState, useEffect, useContext } from 'react';
import { 
    Input, Space,
} from 'antd';
import './index.css';
import { CoreContext } from '../../Contexts/CoreContext';
import MoveableItem from './components/MoveableItem';

const Experience = (props) => {

    const { data } = useContext(CoreContext); 
    const { YourCV } = data;
    const { skills } = YourCV;

    const [moveableItemObject, setMoveableItemObject] = useState({
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

    useEffect(() => {
        
    }, []);

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
                        skills.map((skill, index) => {
                            return (<MoveableItem 
                                    {...props} 
                                    moveableItem={{...skill, index}}
                                    moveableItems={skills}
                                    moveableItemObject={moveableItemObject}
                                    key={skill.id}
                                />)
                        })
                    }
                    
                </div>
            </Space>
        </div>
    )
}

export default Experience;