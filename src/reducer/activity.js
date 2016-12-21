import {fromJS, List,toJS} from 'immutable'

const initialState = fromJS({
    activityList:[],
    moodDetails:{}
})
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GETACTIVITYLISTSHOW':
            return state.set('activityListShow',action.data)
        case 'VIEWMOOD':
            return state.set('moodDetails',action.data)
        default:
            return state
    }
}
