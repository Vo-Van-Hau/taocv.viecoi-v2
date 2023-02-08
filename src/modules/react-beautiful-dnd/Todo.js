import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import './index.css';

import Column from './components/Column';

const Todo = () => {

    const [tasks, setTasks] = useState([]);

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
        const sourceTask = tasks.find((item) => parseInt(item.id) === parseInt(draggableId));
        const newTasks = Array.from(tasks);
        newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, sourceTask);
        setTasks(newTasks);
    }

    useEffect(() => {
        setTasks([
            {
                id: 0,
                content: 'Japanese princess to wed commoner.'
            },{
                id: 1,
                content: 'The sum method returns the sum of all items in the collection.'
            },{
                id: 2,
                content: 'In addition, you may pass your own closure to determine'
            },{
                id: 3,
                content: 'The takeUntil method returns items in the collection'
            },{
                id: 4,
                content: 'The static times method creates a new collection by invoking '
            },
        ]);
    }, []);

    return (
        <div>
            <div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Column tasks={tasks}/>
                </DragDropContext>
            </div>
        </div>
    )
}

export default Todo;

