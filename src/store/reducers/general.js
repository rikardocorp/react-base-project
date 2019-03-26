import * as at from '../actions/actionTypes'
import {data as myData} from '../../config/data'

const initialState = {
    countLoading: 0,
    isLoading: false,
    sendNotification: null,
    unauthorized: false,
    notify: {
        listener: 0,
        config: {}
    },
    user: {
        auth: false,
        token: '',
        profile: {}
    },
    showing: false,
    isHide: false,
    ...myData
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case at.IS_HIDDEN:
            const newValue = !state.showing
            return {
                ...state,
                showing: newValue
            }
        case at.CLICK_IT:
            const newValue2 = !state.showing
            return {
                ...state,
                showing: newValue2
            }
        
        default: return state
    }
}

export default reducer