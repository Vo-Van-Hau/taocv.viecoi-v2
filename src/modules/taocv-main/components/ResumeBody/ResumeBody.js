import React, { useState } from 'react';
import './index.css';
import { 
    Col, Row,
} from 'antd';
import {} from '@ant-design/icons';
import Experience from '../Sections/Experience';
import Education from '../Sections/Education';
import Skills from '../Sections/Skills';
import Languages from '../Sections/Languages';
import Projects from '../Sections/Projects';
import Certification from '../Sections/Certification';
import Awards from '../Sections/Awards';
import FindMeOnline from '../Sections/FindMeOnline';
import Volunteering from '../Sections/Volunteering';
import Summary from '../Sections/Summary';

const ResumeBody = (props) => {

    const [groupPositionSection, setGroupPositionSection] = useState([
        {
            id: 1,
            name: 'A'
        }, {
            id: 2,
            name: 'B'
        },
    ]);
    const [sectionComponents, setSectionComponents] = useState([
        {
            id: 1,
            group_id: 1,
            positionIndex: 0,
            name: 'Experience',
            sectionComponent: <Experience {...props}/>,
        },{
            id: 2,
            group_id: 1,
            positionIndex: 1,
            name: 'Skills',
            sectionComponent: <Skills {...props}/>,
        },{
            id: 3,
            group_id: 2,
            positionIndex: 0,
            name: 'Education',
            sectionComponent: <Education {...props}/>,
        },{
            id: 4,
            group_id: 2,
            positionIndex: 1,
            name: 'Languages',
            sectionComponent: <Languages {...props}/>,
        },
    ]);

    return (
        <div className="ResumePage-module_column">
            <Row gutter={16}>
                <Col span={15}>            
                    <div className="ResumePage-module_columnContainer">
                        {
                            sectionComponents.map((sectionItem, index) => {
                                if(sectionItem && sectionItem.group_id === 1) {
                                    return (<div key={sectionItem.id}>
                                        {sectionItem.sectionComponent}
                                    </div>)
                                }   
                            })
                        }
                    </div>
                </Col>
                <Col span={9}>
                    <div className="ResumePage-module_columnContainer">
                        {
                            sectionComponents.map((sectionItem, index) => {
                                if(sectionItem && sectionItem.group_id === 2) {
                                    return (<div key={sectionItem.id}>
                                        {sectionItem.sectionComponent}
                                    </div>)
                                }   
                            })
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ResumeBody;