import { Modal, Menu, Col, Divider, Row } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const SectionsContainer = styled.div`
    margin: 8px;
    border: 1px solid lightgray;
    border-radius: 2px;
`
const SectionsList = styled.div`
    padding: 8px;
    background-color: ${props => props.isDraggingOver ? '#99FF99' : '#FFFFFF'}
`

const RearrangeSections = (props) => {

    
    /**
     * @author: 
     * @todo: callback
     * @param {Object} result 
     * @return {void}
     */
    const onDragEnd = (result) => {
        const { source, destination, draggableId, combine, mode, reason, type } = result;
        // if(!destination) return;
        // if(destination.droppableId === source.droppableId && destination.index === source.index) return;
        // const sourceTask = tasks.find((item) => parseInt(item.id) === parseInt(draggableId));
        // const newTasks = Array.from(tasks);
        // newTasks.splice(source.index, 1);
        // newTasks.splice(destination.index, 0, sourceTask);
        // setTasks(newTasks);
    }

    return (
        <div>
            <div>
                <Modal title="Drag the boxes to rearrange the sections" open={true}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <SectionsContainer>
                            <Droppable droppableId='1'>
                                {(provided, snapshot) => (
                                    <SectionsList
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        isDraggingOver={snapshot.isDraggingOver}
                                    >
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
                                            <Col className="gutter-row" span={12}>
                                                <div 
                                                    style={{
                                                        background: '#0092ff',
                                                        padding: '8px',
                                                        color: '#FFFFFF',
                                                    }}
                                                >
                                                    Experience
                                                </div>
                                            </Col>
                                            <Col className="gutter-row" span={12}>
                                                <div 
                                                    style={{
                                                        background: '#0092ff',
                                                        padding: '8px',
                                                        color: '#FFFFFF',
                                                    }}
                                                >
                                                    Education
                                                </div>
                                            </Col>
                                            <Col className="gutter-row" span={12}>
                                                <div 
                                                    style={{
                                                        background: '#0092ff',
                                                        padding: '8px',
                                                        color: '#FFFFFF',
                                                    }}
                                                >
                                                    Skills
                                                </div>
                                            </Col>
                                            <Col className="gutter-row" span={12}>
                                                <div 
                                                    style={{
                                                        background: '#0092ff',
                                                        padding: '8px',
                                                        color: '#FFFFFF',
                                                    }}
                                                >
                                                    Languages
                                                </div>
                                            </Col>
                                        </Row>
                                        {provided.placeholder}
                                    </SectionsList>
                                )}
                            </Droppable>
                        </SectionsContainer>
                    </DragDropContext>
                </Modal>
            </div>
        </div>
    )
}

export default RearrangeSections;