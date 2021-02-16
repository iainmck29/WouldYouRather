import { saveQuestion, saveQuestionAnswer, } from '../utils/api'
import { addQuestionToUser, addAnswerToUser } from './users'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const HANDLE_USER_ANSWER = 'HANDLE_USER_ANSWER'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'


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

export function handleUserAnswer(answerData) {
    return (dispatch) => {
        return saveQuestionAnswer(answerData)
            .then(() => {
                dispatch(addUserAnswer(answerData))
                dispatch(addAnswerToUser(answerData))
            })
    }
}

function addUserAnswer({ answer, qid, authedUser }) {
    return {
        type: ADD_USER_ANSWER,
        answer,
        qid,
        authedUser
    }
}


export function handleNewQuestion(question) {
    return (dispatch) => {
        return saveQuestion(question)
            .then((formattedQuestion) => {
                dispatch(addQuestion(formattedQuestion))
                dispatch(addQuestionToUser(formattedQuestion))
            })
    }
}