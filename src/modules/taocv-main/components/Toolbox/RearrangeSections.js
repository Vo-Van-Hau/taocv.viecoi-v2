import { useContext } from 'react';
import { Modal, Col, Row } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { CoreContext } from '../Contexts/CoreContext';

const SectionsContainer = styled.div`
    margin: 8px;
    border: 1px solid lightgray;
    border-radius: 2px;
`
const DraggableItemContainer = styled.div`
    border: 1px solid lightgray;
    border-radius: 2px;
    padding: 8px;
    background-color: ${props => props.isDragging ? '#0092ff' : '#FFFFFF'};
    color: ${props => props.isDragging ? '#FFFFFF' : '#000000'}
`;
const SectionsList = styled.div`
    padding: 8px;
    background-color: ${props => props.isDraggingOver ? '#99FF99' : '#FFFFFF'}
`

/**
 * @author: <it-team@wacontre.com>
 * @todo
 * @param {Object} props 
 * @returns 
 */
const RearrangeSections = (props) => {

    const { data, setGroupPositionSection, toggleRearrangeSectionsToolBox } = useContext(CoreContext); 
    const { groupPositionSection, sectionComponents, AppSettings } = data;
    const { Toolbox } = AppSettings;
    const { RearrangeSections } = Toolbox;

    /**
     * @author: 
     * @todo: callback
     * @param {Object} result 
     * @return {void}
     */
    const onDragEnd = (result) => {
        const { source, destination, draggableId, combine, mode, reason, type } = result;
        if(!destination) return;
        if(destination.droppableId === source.droppableId && destination.index === source.index) return;
        if(source.droppableId === destination.droppableId) {
            const newSectionIds = Array.from(groupPositionSection[source.droppableId - 1].sectionIds);
            newSectionIds.splice(source.index, 1);
            newSectionIds.splice(destination.index, 0, parseInt(draggableId));
            const newColumnGroup = {
                ...groupPositionSection[source.droppableId - 1],
                sectionIds: newSectionIds,
            };
            const newGroupPositionSection = [
                ...groupPositionSection,
            ];
            newGroupPositionSection[source.droppableId - 1] = newColumnGroup;
            return setGroupPositionSection(newGroupPositionSection);
        } else {
            /**
             * @todo: Moving from one list to another
             */
            /**
             * --------------------------------------------------
             * --------------------------------------------------
             * --------------------------------------------------
             */
            const startSectionIds = Array.from(groupPositionSection[source.droppableId - 1].sectionIds);
            startSectionIds.splice(source.index, 1);
            const newStartColumnGroup = {
                ...groupPositionSection[source.droppableId - 1],
                sectionIds: startSectionIds,
            };
            /**
             * --------------------------------------------------
             * --------------------------------------------------
             * --------------------------------------------------
             */
            const finishSectionIds = Array.from(groupPositionSection[destination.droppableId - 1].sectionIds);
            finishSectionIds.splice(destination.index, 0, parseInt(draggableId));
            const newFinishColumnGroup = {
                ...groupPositionSection[destination.droppableId - 1],
                sectionIds: finishSectionIds,
            };
            /**
             * --------------------------------------------------
             * --------------------------------------------------
             * --------------------------------------------------
             */
            const newGroupPositionSection = [
                ...groupPositionSection,
            ];
            newGroupPositionSection[source.droppableId - 1] = newStartColumnGroup;
            newGroupPositionSection[destination.droppableId - 1] = newFinishColumnGroup;
            return setGroupPositionSection(newGroupPositionSection);
        }
    }

    return (
        <div>
            <div>
                <Modal 
                    title="Drag the boxes to rearrange the sections" 
                    open={RearrangeSections.isShow} 
                    onCancel={() => toggleRearrangeSectionsToolBox(false)}
                    onOk={() => toggleRearrangeSectionsToolBox(false)}
                >
                    <DragDropContext onDragEnd={onDragEnd}>
                        <SectionsContainer>
                            <Row gutter={[8, 8]}>
                                <Col className="gutter-row" span={24}>
                                    <div 
                                        style={{
                                            background: '#e6e6e6',
                                            padding: '8px',
                                            color: '#6b7275',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Header
                                    </div>
                                </Col>
                                {
                                    groupPositionSection.map(columnGroup => {
                                        const sections = columnGroup.sectionIds.map((sectionId) => {
                                            return sectionComponents.find((section) => parseInt(section.id) === parseInt(sectionId));
                                        });
                                        return (
                                            <Col span={12} key={`${columnGroup.id}`}>
                                                {<Droppable droppableId={`${columnGroup.id}`}>
                                                    {(provided, snapshot) => (
                                                        <SectionsList
                                                            {...provided.droppableProps}
                                                            ref={provided.innerRef}
                                                            isDraggingOver={snapshot.isDraggingOver}
                                                        >
                                                            <Row gutter={[8, 8]}>
                                                                {
                                                                   sections.map((item, index) => {
                                                                        return (
                                                                            <Col className="gutter-row" span={24} key={item.id}>
                                                                                <DraggableContainer item={item} index={index} />
                                                                            </Col>
                                                                        )
                                                                    })
                                                                }   
                                                                {provided.placeholder}
                                                            </Row>
                                                        </SectionsList>
                                                    )}
                                                </Droppable>}              
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </SectionsContainer>
                    </DragDropContext>
                </Modal>
            </div>
        </div>
    )
}

/**
 * @author: <it-team@wacontre.com>
 * @todo
 * @param {Object} props 
 * @returns 
 */
const DraggableContainer = (props) => {

    const { item, index } = props;

    return (
        <Draggable draggableId={`${item.id}`} index={index}>
            {(provided, snapshot) => (
                <DraggableItemContainer 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps} 
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {item.name}
                </DraggableItemContainer>
            )}
        </Draggable>
    )
}

export default RearrangeSections;