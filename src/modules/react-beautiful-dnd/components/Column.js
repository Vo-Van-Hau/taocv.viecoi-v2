import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Tasks from './Tasks';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgray;
    border-radius: 2px;
`
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => props.isDraggingOver ? '#99FF99' : '#FFFFFF'}
`

const Column = (props) => {

    const { tasks } = props;

    return (
        <Container>
            <Droppable droppableId='1'>
                {(provided, snapshot) => (
                    <TaskList
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((item, index) => {
                            return (
                                <Tasks key={item.id} item={item} index={index}/>
                            )
                        })}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}

export default Column;