import { 
    SET_REARRANGE_SECTIONS, SET_GROUP_POSITION_SECTION, TOGGLE_REARRANGE_SECTIONS_TOOLBOX,
    SET_YOUR_CV_SKILLS, SET_YOUR_CV_QUALIFICATIONS,
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
            adminPrefix: '',
        },
        user: {
            lang_code: 'vi'
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
    },
    YourCV: {
        users: {
            name: 'Vo Van Hau',
            email: 'hau@wacontre.com',
        },
        jobseeker_details: {
            phone: '0359744542',
            city: {
                id: 1,
                name: 'TPHCM'
            },
            address: 'Đường số 8, phường Linh Trung, thành phố Thủ Đức',
        },
        resumes: {
            resume_title: 'PHP Developer'
        },
        skills: [
            {
                id: 0,
                resume_id: 1,
                skill: 'Fullstack Developer',
                ten_congty: 'Wacontre',
                working_time_month_begin: 10,
                working_time_year_begin: 2022,
                working_time_month_end: 3,
                working_time_year_end: 2023,
                is_now: 1,
                level_id: 3,
                cong_viec_chinh: 'Lập trình theo yêu cầu của công ty',
                order: 0,
            },
        ],
        seekers_qualifications: [
            {
                id: 0,
                resume_id: 1,
                qualification: {
                    id: 5,
                    name: 'Cao đẳng'
                },
                specialization_name: 'Web Developer',
                year_of_pass: 2020,
                month_of_pass: 8,
                year_of_end: 2023,
                month_of_year: 1,
                institute: 'FPT',
                is_now: 1,
                order: 1,
            }
        ],
        tag_technique: [
            {
                id: '',
                term: ''
            }
        ],
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
        case SET_YOUR_CV_SKILLS:
            return {...state, YourCV: {...state.YourCV, skills: [...payload]}};
        case SET_YOUR_CV_QUALIFICATIONS:
            return {...state, YourCV: {...state.YourCV, seekers_qualifications: [...payload]}};
        default: return state;
    }
};
