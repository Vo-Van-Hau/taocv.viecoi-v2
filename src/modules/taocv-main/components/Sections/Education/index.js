import { useState, useEffect, useContext } from 'react';
import { 
    Input, Space, DatePicker,
} from 'antd';
import { CoreContext } from '../../Contexts/CoreContext';
import MoveableItem from './components/MoveableItem';

const { RangePicker } = DatePicker;

const Education = (props) => {

    const { data } = useContext(CoreContext); 
    const { YourCV } = data;
    const { seekers_qualifications } = YourCV;

    const [moveableItemObject, setMoveableItemObject] = useState({
        id: 0,
        resume_id: 1,
        qualification: {
            id: 0,
            name: ''
        },
        specialization_name: '',
        year_of_pass: 2020,
        month_of_pass: 8,
        year_of_end: 2023,
        month_of_year: 1,
        institute: '',
        is_now: 1,
        order: 1,
    });

    return (
        <div id="EducationSection-0" className="EducationSection" style={{marginBottom: 14}}>
            <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                <div className="ResumeSection-module_resumeSectionContainer">
                    <div>
                        <div className="resume-section-text-container">
                            <div className="editable-field-wrapper relative">
                                <Input 
                                    placeholder="Education" 
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
                        seekers_qualifications.map((seekers_qualification, index) => {
                            return (<MoveableItem 
                                    {...props} 
                                    moveableItem={{...seekers_qualification, index}}
                                    moveableItems={seekers_qualifications}
                                    moveableItemObject={moveableItemObject}
                                    key={seekers_qualification.id}
                                />)
                        })
                    }
                </div>
            </Space>
        </div>
    )
}

export default Education