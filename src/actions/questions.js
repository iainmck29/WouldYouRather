import { saveQuestion, } from '../utils/api'
import { addQuestionToUser } from './users'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


export default function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}



export function handleNewQuestion(question) {
    return (dispatch) => {
        return saveQuestion(question)
            .then((formattedQuestion) => dispatch(addQuestion(formattedQuestion)))
            .then((formattedQuestion) => dispatch(addQuestionToUser(formattedQuestion)))
    }
}