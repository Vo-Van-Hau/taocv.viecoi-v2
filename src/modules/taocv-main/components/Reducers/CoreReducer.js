import { 
    SET_REARRANGE_SECTIONS, SET_GROUP_POSITION_SECTION, TOGGLE_REARRANGE_SECTIONS_TOOLBOX 
} from '../Dispatch/type';


export const initialState = {
    config: {
        app: {
            name: 'Viecoi Client',
            version: '1.00.000',
            baseURL: '',
            backendURL: '',
            assetURL: '',
            uploadURL: '',
            mediaURL: '',
            adminPrefix: ''
        }
    },
    groupPositionSection: [
        {
            id: 1,
            name: 'A',
            sectionIds: [1, 2],
        }, {
            id: 2,
            name: 'B',
            sectionIds: [3, 4],
        },
    ],
    sectionComponents: [
        {
            id: 1,
            positionIndex: 0,
            name: 'Experience',
        },{
            id: 2,
            positionIndex: 1,
            name: 'Skills',
        },{
            id: 3,
            positionIndex: 0,
            name: 'Education',
        },{
            id: 4,
            positionIndex: 1,
            name: 'Languages',
        },
    ],
    AppSettings: {
        Toolbox: {
            RearrangeSections: {
                isShow: false,
            }
        }
    }
};

/**
 * @author: <it-team@wacontre.com>
 * @todo: CoreReducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export const CoreReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case SET_GROUP_POSITION_SECTION:
            if(!payload) {
                payload = state.groupPositionSection;
            }
            return {...state, groupPositionSection: [...payload]}; 
        case SET_REARRANGE_SECTIONS:
            if(!payload) {
                payload = state.sectionComponents;
            }
            return {...state, sectionComponents: [...payload]};
        case TOGGLE_REARRANGE_SECTIONS_TOOLBOX:
            const currentIsShow = state.AppSettings.Toolbox.RearrangeSections.isShow;
            const newToolBox = {
                ...state.AppSettings.Toolbox, 
                RearrangeSections: {
                    isShow: !currentIsShow,
                }
            }
            return {...state, AppSettings: {...state.AppSettings, Toolbox: newToolBox}};
        default: return state;
    }
};
