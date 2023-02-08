import React from 'react';
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

    return (
        <div className="ResumePage-module_column">
            <Row gutter={16}>
                <Col span={15}>            
                    <div className="ResumePage-module_columnContainer">
                        <Experience {...props}/>
                        <Education {...props}/>
                        <Skills {...props}/>
                        <FindMeOnline {...props}/>
                        <Summary {...props}/>
                    </div>
                </Col>
                <Col span={9}>
                    <div className="ResumePage-module_columnContainer">
                        <Languages {...props}/>
                        <Projects {...props}/>
                        <Certification {...props}/>
                        <Awards {...props}/>
                        <Volunteering {...props}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ResumeBody;