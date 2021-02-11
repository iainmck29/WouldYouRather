export const HANDLE_USER_SELECTION = 'HANDLE_USER_SELECTION'


export default function handleUserSelection(authedUser) {
    return {
        type: HANDLE_USER_SELECTION,
        authedUser
    }
}