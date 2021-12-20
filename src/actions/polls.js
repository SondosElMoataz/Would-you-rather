export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const ANSWER_POLL = 'ANSWER_POLL'

export function addPoll(question){
    return {
        type:ADD_POLL,
        question
    }
}

export function receivePolls(questions){
    return {
        type: RECEIVE_POLLS,
        questions,
    }
}
export function answerPoll(object){
    return {
        type: ANSWER_POLL,
        object,
    }
}
