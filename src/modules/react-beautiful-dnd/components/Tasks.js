import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid lightgray;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => props.isDragging ? '#006600' : '#FFFFFF'};
    color: ${props => props.isDragging ? '#FFFFFF' : '#000000'}
`;

const Tasks = (props) => {

    const { item, index } = props;

    return (
        <Draggable draggableId={`${item.id}`} index={index}>
            {(provided, snapshot) => (
                <Container 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps} 
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {item.content}
                </Container>
            )}
        </Draggable>
    )
}

export default Tasks;