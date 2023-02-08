import {
    BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Todo from '../modules/react-beautiful-dnd/Todo';
import Taocv from '../modules/taocv-main/Taocv';

const RouterWeb = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/modules/react-beautiful-dnd' element={<Todo />} />
                <Route path='/modules/taocv-main' element={<Taocv />} {...props}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterWeb;