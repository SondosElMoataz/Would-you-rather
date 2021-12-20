
export const RECEIVE_USERS  = 'RECEIVE_USERS'
export const ADD_POLL_USER  = 'ADD_POLL_USER'
export const ADD_ANSWER_USER  = 'ADD_ANSWER_USER'

export function receiveUsers (users){
    return {
        type:RECEIVE_USERS,
        users,
    }
}

export function addPollToUser (question){
    return {
        type:ADD_POLL_USER,
        question,
    }
}

export function addAnswerToUser (object){
    return {
        type:ADD_ANSWER_USER,
        object,
    }
}
