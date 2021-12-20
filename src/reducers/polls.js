import {ADD_POLL, RECEIVE_POLLS,ANSWER_POLL} from '../actions/polls'

export default function questions(state = {}, action ){
    switch(action.type){
        case RECEIVE_POLLS :
            return {
                ...state,
                ...action.questions
            }
        case ADD_POLL:
            const { question } = action
            return {
                ...state,
                [question.id]: question,
                

            }
        case ANSWER_POLL:
            const { object } = action
            const {qid, answer, authedUser} = object
            return {
                ...state,
                [qid]:{
                    ...state[qid],
                    [answer]:{
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }


        default:
            return state
        }
    }