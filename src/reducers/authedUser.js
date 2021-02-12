import { HANDLE_USER_SELECTION } from '../actions/authedUser'

export default function authedUser(state = null, action) {
    switch (action.type) {
        case HANDLE_USER_SELECTION:
            return action.id

        default:
            return state
    }
}