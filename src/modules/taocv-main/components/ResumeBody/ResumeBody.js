import React, { useState, useContext } from 'react';
import './index.css';
import { 
    Col, Row,
} from 'antd';
import {} from '@ant-design/icons';
import { CoreContext } from '../Contexts/CoreContext';
import Experience from '../Sections/Experience';
import Education from '../Sections/Education';
import Skills from '../Sections/Skills';
import Languages from '../Sections/Languages';

/**
 * @author: <it-team@wacontre.com>
 * @todo
 * @param {Object} props 
 * @returns 
 */
const ResumeBody = (props) => {

    const { data } = useContext(CoreContext); 
    const { groupPositionSection, sectionComponents } = data;

    sectionComponents.forEach(section => {
        switch(section.id) {
            case 1:
                section.sectionComponent = <Experience {...props}/>;
                break;
            case 2:
                section.sectionComponent = <Skills {...props}/>;
                break;
            case 3:
                section.sectionComponent = <Education {...props}/>;
                break;
            case 4:
                section.sectionComponent = <Languages {...props}/>;
                break;
            default: return;
        }
    });

    return (
        <div className="ResumePage-module_column">
            <Row gutter={16}>
                <Col span={16}>            
                    <div className="ResumePage-module_columnContainer">
                        {
                            groupPositionSection.map(columnGroup => {
                                if(columnGroup.id === 1) {
                                    const sections = columnGroup.sectionIds.map((sectionId) => {
                                        return sectionComponents.find((section) => parseInt(section.id) === parseInt(sectionId));
                                    });
                                    return sections.map((sectionItem, index) => {
                                        if(sectionItem) {
                                            return (<div key={sectionItem.id}>
                                                {sectionItem.sectionComponent}
                                            </div>)
                                        }   
                                    })
                                }
                            })
                        }
                    </div>
                </Col>
                <Col span={8}>
                    <div className="ResumePage-module_columnContainer">
                        {
                            groupPositionSection.map(columnGroup => {
                                if(columnGroup.id === 2) {
                                    const sections = columnGroup.sectionIds.map((sectionId) => {
                                        return sectionComponents.find((section) => parseInt(section.id) === parseInt(sectionId));
                                    });
                                    return sections.map((sectionItem, index) => {
                                        if(sectionItem) {
                                            return (<div key={sectionItem.id}>
                                                {sectionItem.sectionComponent}
                                            </div>)
                                        }   
                                    })
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