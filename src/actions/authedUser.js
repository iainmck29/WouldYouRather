export const HANDLE_USER_SELECTION = 'HANDLE_USER_SELECTION'


export default function handleUserSelection(id) {
    return {
        type: HANDLE_USER_SELECTION,
        id
    }
}