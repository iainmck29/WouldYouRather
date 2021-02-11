export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export default function receiveQuestions(question) {
    return {
        type: RECEIVE_QUESTIONS,
        question
    }
}