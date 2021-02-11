import HANDLE_USER_SELECTION from '../actions/authedUser'

export default function authedUser(state = {}, action) {
    switch (action.type) {
        case HANDLE_USER_SELECTION:
            return {
                ...state,
                ...action.authedUser
            }
        default:
            return state
    }
}