import { getInitialData } from '../utils/api'
import receiveUsers from './users'
import receiveQuestions from './questions'
import handleUserSelection from './authedUser'

const AUTHED_USER = 'johndoe'

export default function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(handleUserSelection(AUTHED_USER))
            })
    }
}