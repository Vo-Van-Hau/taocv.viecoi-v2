import React, { createContext, useReducer } from 'react';
import { createSearchParams } from 'react-router-dom';
import { initialState, CoreReducer } from '../Reducers/CoreReducer';
import { 
    SET_REARRANGE_SECTIONS, SET_GROUP_POSITION_SECTION, TOGGLE_REARRANGE_SECTIONS_TOOLBOX,
    SET_YOUR_CV_SKILLS, SET_YOUR_CV_QUALIFICATIONS,
} from '../Dispatch/type';

export const CoreContext = createContext();

/**
 * @author: <it-team@wacontre.com>
 * @todo:
 * @param {*} param0
 * @returns
 */
const CoreContextProvider = ({ children, axios, history }) => {

    const [data, dispatch] = useReducer(CoreReducer, initialState);

    /**
     * @author: <it-team@wacontre.com>
     * @todo
     * @param {Array} newGroupPositionSection
     * @return
     */
    const setGroupPositionSection = (newGroupPositionSection) => {
        dispatch({ type: SET_GROUP_POSITION_SECTION, payload: newGroupPositionSection});
    }

    /**
     * @author: <it-team@wacontre.com>
     * @todo
     * @param {Array} newSections
     * @return
     */
    const setRearrangeSections = (newSections) => {
        dispatch({ type: SET_REARRANGE_SECTIONS, payload: newSections});
    }

    /**
     * @author: <it-team@wacontre.com>
     * @todo
     * @param: {Boolean} isShow
     * @return
     */
    const toggleRearrangeSectionsToolBox = (isShow) => {
        dispatch({ type: TOGGLE_REARRANGE_SECTIONS_TOOLBOX, payload: isShow});
    }

    /**
     * @author: <it-team@wacontre.com>
     * @todo
     * @param: {Array} payload
     * @return
     */
    const setYourCVSkills = (payload) => {
        dispatch({ type: SET_YOUR_CV_SKILLS, payload: payload});
    }

    /**
     * @author: <it-team@wacontre.com>
     * @todo
     * @param: {Array} payload
     * @return
     */
    const setYourCVQualifications = (payload) => {
        dispatch({ type: SET_YOUR_CV_QUALIFICATIONS, payload: payload});
    }

    const todoContextData = {
        data, dispatch, setRearrangeSections, setGroupPositionSection, toggleRearrangeSectionsToolBox,
        setYourCVSkills, setYourCVQualifications,
    };

    return (
        <CoreContext.Provider value={todoContextData}>
            {children}
        </CoreContext.Provider>
    );
};

export default CoreContextProvider;
